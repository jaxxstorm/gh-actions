import { Step } from './step';
export class Job {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    addStep(step) {
        if (!(this.steps instanceof Step)) {
            this.steps.push(new step);
        }
        return this.steps;
    }
}
