import CallResult from '../CallResult';
import UnlockStatus from 'src/enum/UnlockStatus';

export type UnlockConnectorResPayload = {
    status: UnlockStatus;
};

export default class UnlockConnectorResult extends CallResult {
  constructor(public uniqueId: string, public payload: UnlockConnectorResPayload) {
    super(uniqueId, payload);
  }
}