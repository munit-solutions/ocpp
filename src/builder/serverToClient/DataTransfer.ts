import CallResult from '../CallResult';
import DataTransferStatus from '../../enum/DataTransferStatus';

export type DataTransferResPayload = {
  status: DataTransferStatus;
  data?: string;
};

export default class DataTransferResult extends CallResult {
  constructor(public uniqueId: string, public payload: DataTransferResPayload) {
    super(uniqueId, payload);
  }
}
