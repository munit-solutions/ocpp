import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type ReserveNowPayload = {
    connectorId: number;
    expiryDate: string;
    idTag: string;
    parentIdTag?: string;
    reservationId: number;
};

export default class ReserveNow extends Call {
  constructor(public uniqueId: string = '', public payload?: ReserveNowPayload) {
    super();
    this.action = ClientCommand.ReserveNow;
  }
}
