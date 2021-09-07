import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';
import ChargingProfilePurposeType from '../../enum/ChargingProfilePurposeType';

export type ClearChargingProfilePayload = {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: ChargingProfilePurposeType;
  stackLevel?: number;
};
export default class ClearChargingProfile extends Call {
  constructor(public payload?: ClearChargingProfilePayload) {
    super();
    this.action = ActionEnum.ClearChargingProfile;
  }
}
