import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export default class GetLocalListVersion extends Call {
  constructor(public uniqueId: string = '') {
    super();
    this.action = ClientCommand.GetLocalListVersion;
  }
}
