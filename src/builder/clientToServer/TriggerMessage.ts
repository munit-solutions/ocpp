import Call from '../Call';
import MessageTrigger from '../../enum/MessageTrigger';

export type TriggerMessagePayload = {
  requestedMessage: MessageTrigger;
  connecterId?: number;
};

export default class TriggerMessage extends Call {
  constructor(public payload?: TriggerMessagePayload) {
    super();
  }
}
