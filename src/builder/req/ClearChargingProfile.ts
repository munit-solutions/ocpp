import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';
import ChargingProfilePurposeType from '../../enum/ChargingProfilePurposeType';

export type ClearChargingProfilePayload = {
  id?: number;
  connectorId?: number;
  chargingProfilePurpose?: ChargingProfilePurposeType;
  stackLevel?: number;
};
export default class ClearChargingProfile extends Call {
  constructor(public uniqueId: string = '', public payload?: ClearChargingProfilePayload) {
    super();
    this.action = ClientCommand.ClearChargingProfile;
  }
}
