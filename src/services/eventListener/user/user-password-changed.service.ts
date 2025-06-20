import UsersModel from "../../../models/users.model";
import { EventMessageData } from "../../../shared/types/common.type";
import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UsersService from "../../users.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";
import { EVENT_USER_PASSWORD_CHANGED } from "../../../shared/constants/events.constant";

export default class UserPasswordChangedEventListenerService extends EventListenerAbstract<EventMessageData<UsersModel>> implements EventListenerService<UsersModel> {
  usersService: UsersService;

  constructor() {
    super();
    this.usersService = new UsersService();
  };

  execute = async (): Promise<void> => {
    if (!this.state) {
      console.error("State cannot be empty!");
      return;
    };

    const userId = this.state.value.new_details.id!;
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
      updated_at: this.state.value.new_details.updated_at,
    });
    const newUser = await this.usersService.update(user)
      .catch(err => {
        console.log("Error on changing users password", err);
        return null;
      });

    if (!newUser) {
      return;
    }

    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: "UPDATE",
      event_type: EVENT_USER_PASSWORD_CHANGED,
      table_name: "users",
      table_id: newUser.id!,
      payload: this.state.value,
      header: {
        ip_address: this.state.header.ip_address,
        user_agent: this.state.header.user_agent
      },
      user_id: this.state.userId,
      business_id: newUser.business_id ?? undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully changed user password ${newUser.id}.`);
  };
};