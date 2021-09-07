import Call from '../Call';

export type GetConfigurationPayload = {
  key?: string[];
  unknownKey?: string[];
};

export type KeyValue = {
  key: string;
  readonly: boolean;
  value: string;
};

export default class GetConfiguration extends Call {
  constructor(public payload?: GetConfigurationPayload) {
    super();
  }
}
