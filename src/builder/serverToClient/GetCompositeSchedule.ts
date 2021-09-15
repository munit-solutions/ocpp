import CallResult from '../CallResult';
import {ChargingSchedule} from '../../type/ChargingSchedule';
import GetCompositeScheduleStatus from '../../enum/GetCompositeScheduleStatus';

export type GetCompositeScheduleResPayload = {
  status: GetCompositeScheduleStatus;
  connectorId?: number;
  scheduleStart?: Date;
  chargingSchedule?: ChargingSchedule;
};

export default class GetCompositeScheduleResult extends CallResult {
  constructor(public uniqueId: string, public payload: GetCompositeScheduleResPayload) {
    super(uniqueId, payload);
  }
}
