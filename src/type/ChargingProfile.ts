import ChargingProfilePurposeType from '../enum/ChargingProfilePurposeType';
import ChargingProfileKindType from "../enum/ChargingProfileKindType";
import RecurrencyKindType from "../enum/RecurrencyKindType";
import {ChargingSchedule} from "./ChargingSchedule";

export type ChargingProfile = {
  chargingProfileId: number,
  transactionId?: number,
  stackLevel: number,
  chargingProfilePurpose: ChargingProfilePurposeType,
  chargingProfileKind: ChargingProfileKindType,
  recurrencyKindType: RecurrencyKindType,
  validFrom: Date,
  validTo: Date,
  chargingSchedule: ChargingSchedule,
}
