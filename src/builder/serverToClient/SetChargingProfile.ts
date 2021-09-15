import CallResult from '../CallResult';
import ChargingProfileStatus from '../../enum/ChargingProfileStatus';

export type SetChargingProfileResPayload = {
    status: ChargingProfileStatus;
};

export default class SetChargingProfileResult extends CallResult {
  constructor(public uniqueId: string, public payload: SetChargingProfileResPayload) {
    super(uniqueId, payload);
  }
}