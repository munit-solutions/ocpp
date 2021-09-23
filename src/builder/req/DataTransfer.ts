import DataTransferStatus from '../../enum/DataTransferStatus';
import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type DataTransferPayload = {
  status: DataTransferStatus;
  data?: string;
};

export default class DataTransfer extends Call {
  constructor(public uniqueId: string = '', public payload?: DataTransferPayload) {
    super();
    this.action = ClientCommand.DataTransfer;
  }
}
