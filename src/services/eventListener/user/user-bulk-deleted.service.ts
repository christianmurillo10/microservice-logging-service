import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UsersService from "../../users.service";
import UsersModel from "../../../models/users.model";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class UserBulkDeletedEventListenerService extends EventListenerAbstract<Record<string, string[]>> implements EventListenerService<Record<string, string[]>> {
  private usersService: UsersService;

  constructor() {
    super();
    this.usersService = new UsersService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const userIds = this.state.value.new_details.ids!;

    for (const userId of userIds) {
      const existingUser = await this.usersService.getById({ id: userId })
        .catch(err => {
          if (err instanceof NotFoundException) {
            console.log(`User ${userId} not exist!`);
            return;
          }

          throw err;
        });

      if (!existingUser) {
        return;
      }

      const user = new UsersModel({
        ...existingUser,
        deleted_at: new Date()
      });
      const newUser = await this.usersService.update(user)
        .catch(err => {
          console.log("Error on deleting users", err);
        });

      if (!newUser) {
        return;
      }

      const loggingService = new LoggingService({
        service_name: "USER_SERVICE",
        action: "DELETE_MANY",
        event_type: this.state.eventType,
        table_name: "users",
        table_id: existingUser.id!,
        payload: {
          old_details: {
            id: existingUser.id,
            deleted_at: existingUser.deleted_at
          },
          new_details: {
            id: newUser.id,
            deleted_at: newUser.deleted_at
          }
        },
        header: {
          ip_address: this.state.header.ip_address,
          user_agent: this.state.header.user_agent
        },
        user_id: this.state.userId,
        business_id: newUser.business_id ?? undefined
      });
      await loggingService.execute();
    }

    console.info("Event Notification: Successfully bulk deleted users.");
  };
};