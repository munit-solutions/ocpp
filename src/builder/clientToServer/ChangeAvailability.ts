import AvailabilityType from '../../enum/AvailabilityType';
import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type ChangeAvailabilityPayload = {
  connectorId: number;
  type: AvailabilityType;
};
export default class ChangeAvailability extends Call {
  constructor(public payload?: ChangeAvailabilityPayload) {
    super();
    this.action = ActionEnum.ChangeAvailability;
  }
}
