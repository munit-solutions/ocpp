import CallResult from '../CallResult';
import {IdTagInfo} from '../../type/IdTagInfo';

export type StartTransactionResPayload = {
    idTagInfo: IdTagInfo;
    transactionId: number;
};

export default class StartTransactionResult extends CallResult {
  constructor(public uniqueId: string, public payload: StartTransactionResPayload) {
    super(uniqueId, payload);
  }
}