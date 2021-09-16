import Call from '../Call';

export type RemoteStopTransactionPayload = {
  transactionId: number;
};

export default class RemoteStopTransaction extends Call {
  constructor(public payload?: RemoteStopTransactionPayload) {
    super();
  }
}