import Call from '../Call';
import MessageTrigger from '../../enum/MessageTrigger';
import ClientCommand from '../../enum/ClientCommand';

export type TriggerMessagePayload = {
  requestedMessage: MessageTrigger;
  connectorId?: number;
};

export default class TriggerMessage extends Call {
  constructor(public uniqueId: string = '', public payload?: TriggerMessagePayload) {
    super();
    this.action = ClientCommand.TriggerMessage;
  }
}
