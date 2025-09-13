import UserEntity from "../../../entities/user.entity";
import EventListenerAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UserService from "../../user.service";
import LoggingService from "../../logging.service";

export default class UserCreatedEventListenerService extends EventListenerAbstract<UserEntity> implements EventListenerService<UserEntity> {
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

    const user = new UserEntity(this.state.value.newDetails);
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