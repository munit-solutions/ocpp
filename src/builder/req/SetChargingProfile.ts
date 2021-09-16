import Call from '../Call';
import {ChargingProfile} from '../../type/ChargingProfile';

export type SetChargingProfilePayload = {
    connectorId: number;
    csChargingProfiles: ChargingProfile;
};

export default class SetChargingProfile extends Call {
  constructor(public payload?: SetChargingProfilePayload) {
    super();
  }
}

