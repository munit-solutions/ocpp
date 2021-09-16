import CallResult from '../CallResult';
import ClearChargingProfileStatus from '../../enum/ClearChargingProfileStatus';

export type ClearChargingProfileResPayload = {
  status: ClearChargingProfileStatus;
};
export default class ClearChargingProfileResult extends CallResult {
  constructor(public uniqueId: string, public payload: ClearChargingProfileResPayload) {
    super(uniqueId, payload);
  }
}
