import { Step } from './step';
export class Job {
    addStep(step) {
        if (!(this.steps instanceof Step)) {
            this.steps.push(new step);
        }
        return this.steps;
    }
}
