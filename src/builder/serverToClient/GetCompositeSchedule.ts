import CallResult from '../CallResult';
import ChargingRateUnitType from '../../enum/ChargingRateUnitType';
import GetCompositeScheduleStatus from '../../enum/GetCompositeScheduleStatus';

export type GetCompositeScheduleResPayload = {
  status: GetCompositeScheduleStatus;
  connectorId: number;
  scheduleStart: Date;
  chargingSchedule: ChargingSchedule;
};
export type ChargingSchedule = {
  duration?: number;
  startSchedule?: Date;
  chargingRateUnit: ChargingRateUnitType;
  chargingSchedulePeriod: ChargingSchedulePeriod[];
  minChargingRate?: number;
};
export type ChargingSchedulePeriod = {
  startPeriod: number;
  limit: number;
  numberPhases?: number;
};

export default class GetCompositeScheduleResult extends CallResult {
  constructor(public uniqueId: string, public payload: GetCompositeScheduleResPayload) {
    super(uniqueId, payload);
  }
}
