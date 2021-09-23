import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type StartTransactionPayload = {
  connectorId: number;
  idTag: number;
  meterStart: number;
  reservationId?:number;
  timestamp:Date
};

export default class StartTransaction extends Call {
  constructor(public uniqueId: string = '', public payload?: StartTransactionPayload) {
    super();
    this.action = ClientCommand.StartTransaction;
  }
}
