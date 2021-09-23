import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type UnlockConnectorPayload = {
  [key: string]: any;
  // TODO
};

export default class UnlockConnector extends Call {
  constructor(public uniqueId: string = '', public payload?: UnlockConnectorPayload) {
    super();
    this.action = ClientCommand.UnlockConnector
  }
}
