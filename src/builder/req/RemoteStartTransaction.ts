import Call from '../Call';
import {ChargingProfile} from "../../type/ChargingProfile"

export type RemoteStartTransactionPayload = {
  connectorId: number;
  idTag: number;
  chargingProfile?: ChargingProfile;
};

export default class RemoteStartTransaction extends Call {
  constructor(public payload?: RemoteStartTransactionPayload) {
    super();
  }
}
