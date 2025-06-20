import { EventMessageData } from "../../shared/types/common.type";
import { State } from "../../shared/types/service.type";

export default interface EventListenerService<T> {
  setState(state: State<EventMessageData<T>>): void;

  execute(): Promise<void>;
};