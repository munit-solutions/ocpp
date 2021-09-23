import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export default class Heartbeat extends Call {
  constructor(public uniqueId: string = '') {
    super();
    this.action = ClientCommand.Heartbeat;
  }
}
