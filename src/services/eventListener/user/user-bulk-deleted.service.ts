import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UserService from "../../user.service";
import UserModel from "../../../models/user.model";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class UserBulkDeletedEventListenerService extends EventListenerAbstract<Record<string, string[]>> implements EventListenerService<Record<string, string[]>> {
  private userService: UserService;

  constructor() {
    super();
    this.userService = new UserService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const userIds = this.state.value.newDetails.ids!;

    for (const userId of userIds) {
      const existingUser = await this.userService.getById({ id: userId })
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

      const user = new UserModel({
        ...existingUser,
        deletedAt: new Date()
      });
      const newUser = await this.userService.update(user)
        .catch(err => {
          console.log("Error on deleting user", err);
        });

      if (!newUser) {
        return;
      }

      const loggingService = new LoggingService({
        serviceName: "USER_SERVICE",
        action: "DELETE_MANY",
        eventType: this.state.eventType,
        tableName: "user",
        tableId: existingUser.id!,
        payload: {
          oldDetails: {
            id: existingUser.id,
            deletedAt: existingUser.deletedAt
          },
          newDetails: {
            id: newUser.id,
            deletedAt: newUser.deletedAt
          }
        },
        header: {
          ipAddress: this.state.header.ipAddress,
          userAgent: this.state.header.userAgent
        },
        userId: this.state.userId,
        businessId: newUser.businessId ?? undefined
      });
      await loggingService.execute();
    }

    console.info("Event Notification: Successfully bulk deleted user.");
  };
};