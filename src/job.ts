import { Defaults } from './defaults';

export type Name = string;

export class Job {
  name?: string;
  needs?: [Name, ...Name[]] | Name;
  outputs?: {
    [k: string]: string;
  };
  env?: {
    [k: string]: string | number | boolean;
  };
  defaults?: Defaults;
}
