import { EventMessageData } from "../../shared/types/common.type";
import { State } from "../../shared/types/service.type";

export default interface EventListenerService<Model> {
  setState(state: State<EventMessageData<Model | Record<string, string[]>>>): void;

  execute(): Promise<void>;
};