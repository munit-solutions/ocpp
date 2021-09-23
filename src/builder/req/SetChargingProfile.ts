import Call from '../Call';
import {ChargingProfile} from '../../type/ChargingProfile';
import ClientCommand from '../../enum/ClientCommand';

export type SetChargingProfilePayload = {
  connectorId: number;
  csChargingProfiles: ChargingProfile;
};

export default class SetChargingProfile extends Call {
  constructor(public uniqueId: string = '', public payload?: SetChargingProfilePayload) {
    super(uniqueId, payload);
    this.action = ClientCommand.SetChargingProfile;
  }
}


