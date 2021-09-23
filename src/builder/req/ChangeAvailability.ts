import AvailabilityType from '../../enum/AvailabilityType';
import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type ChangeAvailabilityPayload = {
  connectorId: number;
  type: AvailabilityType;
};
export default class ChangeAvailability extends Call {
  constructor(public uniqueId: string = '', public payload?: ChangeAvailabilityPayload) {
    super();
    this.action = ClientCommand.ChangeAvailability;
  }
}
