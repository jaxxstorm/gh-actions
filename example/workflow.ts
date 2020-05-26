// @ts-ignore
import * as g from '../dist/workflow';

// eslint-disable-next-line no-template-curly-in-string
const workflow = name => new g.PulumiGithubWorkflow('release');

export default [
  { value: workflow('pull-request'), file: 'pull-request.yml' },
];
