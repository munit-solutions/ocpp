import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type UpdateFirmwarePayload = {
  location: string;
  retries?: number;
  retrieveDate: Date,
  retryInterval?: number,
};

export default class UpdateFirmware extends Call {
  constructor(public uniqueId: string = '', public payload?: UpdateFirmwarePayload) {
    super();
    this.action = ClientCommand.UpdateFirmware;
  }
}
