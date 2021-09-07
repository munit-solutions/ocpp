import ChargingRateUnitType from '../../enum/ChargingRateUnitType';
import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type GetCompositeScheduleResPayload = {
  connectorId: number;
  duration: number;
  chargingRateUnit: ChargingRateUnitType;
};

export default class GetCompositeSchedule extends Call {
  constructor(public payload?: GetCompositeScheduleResPayload) {
    super();
    this.action = ActionEnum.GetCompositeSchedule;
  }
}
