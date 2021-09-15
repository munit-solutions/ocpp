import CallResult from '../CallResult';
import RemoteStartStopStatus from '../../enum/RemoteStartStopStatus';

export type RemoteStopTrancsactionResPayload = {
    status: RemoteStartStopStatus;
};

export default class RemoteStopTransactionResult extends CallResult {
  constructor(public uniqueId: string, public payload: RemoteStopTrancsactionResPayload) {
    super(uniqueId, payload);
  }
}