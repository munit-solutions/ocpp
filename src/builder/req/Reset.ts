import Call from '../Call';
import ResetType from '../../enum/ResetType';


export type ResetPayload = {
    type: ResetType;
};

export default class Reset extends Call {
  constructor(public payload?: ResetPayload) {
    super();
  }
}