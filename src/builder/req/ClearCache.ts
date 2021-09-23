import Call from '../Call';
import ClientCommand from '../../enum/ClientCommand';

export default class ClearCache extends Call {
  constructor(public uniqueId: string = '') {
    super();
    this.action = ClientCommand.ClearCache;
  }
}
