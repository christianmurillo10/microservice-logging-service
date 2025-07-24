import UserModel from "../../../models/user.model";
import UserEventListenerServiceAbstract from "../event-listener.abstract";
import EventListenerService from "../event-listener.interface";
import UserService from "../../user.service";
import NotFoundException from "../../../shared/exceptions/not-found.exception";
import LoggingService from "../../logging.service";

export default class UserLoggedOutEventListenerService extends UserEventListenerServiceAbstract<UserModel> implements EventListenerService<UserModel> {
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

    const userId = this.state.value.newDetails.id!;
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
      ...this.state.value.newDetails
    });
    const newUser = await this.userService.update(user)
      .catch(err => {
        console.log("Error on updating user", err);
        return null;
      });

    if (!newUser) {
      return;
    }

    const loggingService = new LoggingService({
      serviceName: "AUTH_SERVICE",
      action: "LOGOUT",
      eventType: this.state.eventType,
      tableName: "user",
      tableId: newUser.id!,
      payload: this.state.value,
      header: {
        ipAddress: this.state.header.ipAddress,
        userAgent: this.state.header.userAgent
      },
      userId: this.state.userId,
      businessId: newUser.businessId ?? undefined
    });
    await loggingService.execute();

    console.info(`Event Notification: Successfully logged out user ${newUser.id}.`);
  };
};