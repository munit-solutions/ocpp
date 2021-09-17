import {ChargingProfile} from '../../type/ChargingProfile';
import CallResult from '../CallResult';

export type SetChargingProfilePayload = {
  connectorId: number;
  csChargingProfiles: ChargingProfile;
};

export default class SetChargingProfile extends CallResult {
  constructor(public uniqueId: string, public payload: SetChargingProfilePayload) {
    super(uniqueId, payload);
  }
}


