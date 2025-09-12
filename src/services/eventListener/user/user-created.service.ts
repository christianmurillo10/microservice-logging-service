import UserModel from "../../../models/user.model";
import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UserService from "../../user.service";
import LoggingService from "../../logging.service";

export default class UserCreatedEventListenerService extends EventListenerAbstract<UserModel> implements EventListenerService<UserModel> {
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

    const user = new UserModel(this.state.value.newDetails);
    const newUser = await this.userService.create(user)
      .catch(err => {
        console.log("Error on creating user", err);
        return null;
      });

    if (!newUser) {
      return;
    }

    const loggingService = new LoggingService({
      serviceName: "USER_SERVICE",
      action: "CREATE",
      eventType: this.state.eventType,
      tableName: "user",
      tableId: newUser.id!,
      payload: this.state.value,
      header: {
        ipAddress: this.state.header.ipAddress,
        userAgent: this.state.header.userAgent
      },
      userId: this.state.userId,
      organizationId: newUser.organizationId ?? undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully created user ${newUser.id}.`);
  };
};