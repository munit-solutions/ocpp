import Call from '../Call';
import ActionEnum from '../../enum/ActionEnum';

export default class ClearCache extends Call {
  constructor() {
    super();
    this.action = ActionEnum.ClearCache;
  }
}
