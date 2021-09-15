import Call from '../Call';

export type StartTransactionPayload = {
  connectorId: number;
  idTag: number;
  meterStart: number;
  reservationId?:number;
  timestamp:Date
};

export default class StartTransaction extends Call {
  constructor(public payload?: StartTransactionPayload) {
    super();
  }
}
