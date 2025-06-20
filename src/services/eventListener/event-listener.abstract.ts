import { State } from "../../shared/types/service.type";

export default abstract class EventListenerAbstract<V> {
  state: State<V> | undefined;

  setState = (state: State<V>) => this.state = state;
};