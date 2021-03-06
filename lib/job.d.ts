import { Defaults } from './defaults';
import { Step } from './step';
export declare type Name = string;
export declare class Job {
    name?: string;
    needs?: [Name, ...Name[]] | Name;
    outputs?: {
        [k: string]: string;
    };
    env?: {
        [k: string]: string | number | boolean;
    };
    defaults?: Defaults;
    container?: string;
    steps: Step[] | Step;
    if?: string;
}
