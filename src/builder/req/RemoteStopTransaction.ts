import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type RemoteStopTransactionPayload = {
  transactionId: number;
};

export default class RemoteStopTransaction extends Call {
  constructor(public uniqueId: string = '', public payload?: RemoteStopTransactionPayload) {
    super();
    this.action = ClientCommand.RemoteStopTransaction;
  }
}
