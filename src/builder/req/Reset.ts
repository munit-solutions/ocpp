import Call from '../Call';
import ResetType from '../../enum/ResetType';
import ClientCommand from '../../enum/ClientCommand';


export type ResetPayload = {
    type: ResetType;
};

export default class Reset extends Call {
  constructor(public uniqueId: string = '', public payload?: ResetPayload) {
    super();
    this.action = ClientCommand.Reset;
  }
}
