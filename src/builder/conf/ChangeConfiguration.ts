import CallResult from '../CallResult';
import ConfigurationStatus from '../../enum/ConfigurationStatus';

export type ChangeConfigurationResPayload = {
  status: ConfigurationStatus;
};
export default class ChangeConfigurationResult extends CallResult {
  constructor(public uniqueId: string, public payload: ChangeConfigurationResPayload) {
    super(uniqueId, payload);
  }
}
