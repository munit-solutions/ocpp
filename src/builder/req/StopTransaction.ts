import Call from '../Call';
import Reason from '../../enum/Reason';
import {MeterValue} from '../../type/MeterValue';
import ClientCommand from '../../enum/ClientCommand';

export type StopTransactionPayload = {
  idTag?: string;
  meterStop: number;
  timestamp: string;
  transactionId: number;
  reason?: Reason;
  transactionData: MeterValue[];
};

export default class StopTransaction extends Call {
  constructor(public uniqueId: string = '',public payload?: StopTransactionPayload) {
    super();
    this.action = ClientCommand.StopTransaction;
  }
}
