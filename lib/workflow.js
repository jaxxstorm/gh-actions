export var Event;
(function (Event) {
    Event["CheckRun"] = "check_run";
    Event["CheckSuite"] = "check_suite";
    Event["Create"] = "create";
    Event["Delete"] = "delete";
    Event["Deployment"] = "deployment";
    Event["DeploymentStatus"] = "deployment_status";
    Event["Fork"] = "fork";
    Event["Gollum"] = "gollum";
    Event["IssueComment"] = "issue_comment";
    Event["Issues"] = "issues";
    Event["Label"] = "label";
    Event["Member"] = "member";
    Event["Milestone"] = "milestone";
    Event["PageBuild"] = "page_build";
    Event["Project"] = "project";
    Event["ProjectCard"] = "project_card";
    Event["ProjectColumn"] = "project_column";
    Event["Public"] = "public";
    Event["PullRequest"] = "pull_request";
    Event["PullRequestReview"] = "pull_request_review";
    Event["PullRequestReviewComment"] = "pull_request_review_comment";
    Event["Push"] = "push";
    Event["RegistryPackage"] = "registry_package";
    Event["Release"] = "release";
    Event["RepositoryDispatch"] = "repository_dispatch";
    Event["Status"] = "status";
    Event["Watch"] = "watch";
})(Event || (Event = {}));
export class GithubWorkflow {
    constructor(name, jobs, on, params) {
        Object.assign(this, { name }, { jobs }, { on }, params);
    }
}
/*
export class PulumiGithubWorkflow extends GithubWorkflow {
  constructor(name: string) {
    super(name, {
      foo: {
        name: 'something',
      }
    });
  }
}
*/
