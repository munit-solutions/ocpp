import ChargingRateUnitType from '../enum/ChargingRateUnitType';
import {ChargingSchedulePeriod} from '../type/ChargingSchedulePeriod';

export type ChargingSchedule = {
    duration: number,
    startSchedule: Date,
    chargingRateUnit: ChargingRateUnitType,
    chargingSchedulePeriod: ChargingSchedulePeriod,
    minChargingRate:number
}
