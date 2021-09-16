import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export type ChangeConfigurationPayload = {
  key: string;
  value: string;
};
export default class ChangeConfiguration extends Call {
  constructor(public payload?: ChangeConfigurationPayload) {
    super();
    this.action = ClientCommand.ChangeConfiguration;
  }
}
