// @ts-ignore
import * as g from '../dist/workflow'

// eslint-disable-next-line no-template-curly-in-string
const workflow = name =>
  new g.GithubWorkflow(
    'release',
    {
      lint: {
        name: 'lint',
        container: 'golangci/golangci-lint:v1.25.1',
        steps: [
          {
            name: 'Checkout repo',
            uses: 'actions/checkout@v2'
          }
        ]
      }
    },
    {
      push: 'master'
    },
    {
      env: {
        PATH: 'var'
      }
    }
  )

export default [{value: workflow('pull-request'), file: 'pull-request.yml'}]
