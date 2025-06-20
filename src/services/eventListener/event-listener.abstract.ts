import { EventMessageData } from "../../shared/types/common.type";
import { State } from "../../shared/types/service.type";

export default abstract class EventListenerAbstract<T> {
  state: State<EventMessageData<T>> | undefined;

  setState = (state: State<EventMessageData<T>>) => this.state = state;
};