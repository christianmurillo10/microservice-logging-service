import UsersModel from "../../../models/users.model";
import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UsersService from "../../users.service";
import LoggingService from "../../logging.service";

export default class UserCreatedEventListenerService extends EventListenerAbstract<UsersModel> implements EventListenerService<UsersModel> {
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

    const user = new UsersModel(this.state.value.new_details);
    const newUser = await this.usersService.create(user)
      .catch(err => {
        console.log("Error on creating users", err);
        return null;
      });

    if (!newUser) {
      return;
    }

    const loggingService = new LoggingService({
      service_name: "USER_SERVICE",
      action: "CREATE",
      event_type: this.state.eventType,
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

    console.info(`Event Notification: Successfully created user ${newUser.id}.`);
  };
};