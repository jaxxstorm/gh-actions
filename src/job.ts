import {Defaults} from './defaults'
import {Step} from './step'

export type Name = string

export class Job {
  name?: string
  needs?: [Name, ...Name[]] | Name
  outputs?: {
    [k: string]: string
  }
  env?: {
    [k: string]: string | number | boolean
  }
  defaults?: Defaults
  container?: string
  steps: Step[] | Step

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public addStep(step): Step[] | Step {
    if (!(this.steps instanceof Step)) {
      this.steps.push(new step)
    }
    return this.steps
  }
}
