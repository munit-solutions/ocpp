import DataTransferStatus from '../../enum/DataTransferStatus';
import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type DataTransferPayload = {
  status: DataTransferStatus;
  data?: string;
};

export default class DataTransfer extends Call {
  constructor(public payload?: DataTransferPayload) {
    super();
    this.action = ActionEnum.DataTransfer;
  }
}
