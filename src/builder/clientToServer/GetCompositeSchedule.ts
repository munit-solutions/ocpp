import ChargingRateUnitType from '../../enum/ChargingRateUnitType';
import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type GetCompositeScheduleResPayload = {
  connectorId: number;
  duration: number;
  chargingRateUnit: ChargingRateUnitType;
};

export default class GetCompositeSchedule extends Call {
  constructor(public payload?: GetCompositeScheduleResPayload) {
    super();
    this.action = ClientCommand.GetCompositeSchedule;
  }
}
