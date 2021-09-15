import CallResult from '../CallResult';
import {IdTagInfo} from '../../type/IdTagInfo';

export type StopTransactionResPayload = {
    idTagInfo: IdTagInfo;
};

export default class StopTransactionResult extends CallResult {
  constructor(public uniqueId: string, public payload: StopTransactionResPayload) {
    super(uniqueId, payload);
  }
}