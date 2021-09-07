import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export type ChangeConfigurationPayload = {
  key: string;
  value: string;
};
export default class ChangeConfiguration extends Call {
  constructor(public payload?: ChangeConfigurationPayload) {
    super();
    this.action = ActionEnum.ChangeConfiguration;
  }
}
