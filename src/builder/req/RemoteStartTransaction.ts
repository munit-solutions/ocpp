import Call from '../Call';
import {ChargingProfile} from "../../type/ChargingProfile"
import ClientCommand from '../../enum/ClientCommand';

export type RemoteStartTransactionPayload = {
  connectorId: number;
  idTag: number;
  chargingProfile?: ChargingProfile;
};

export default class RemoteStartTransaction extends Call {
  constructor(public uniqueId: string = '', public payload?: RemoteStartTransactionPayload) {
    super();
    this.action = ClientCommand.RemoteStartTransaction;
  }
}
