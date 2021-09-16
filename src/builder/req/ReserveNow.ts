import Call from '../Call';

export type ReserveNowPayload = {
    connectorId: number;
    expiryDate: string;
    idTag: string;
    parentIdTag?: string;
    reservationId: number;
};

export default class ReserveNow extends Call {
  constructor(public payload?: ReserveNowPayload) {
    super();
  }
}