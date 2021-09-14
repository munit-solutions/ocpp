import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export default class ClearCache extends Call {
  constructor() {
    super();
    this.action = ClientCommand.ClearCache;
  }
}
