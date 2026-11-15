'use strict';

const assert = require('assert');
const lock = require('../package-lock.json');
const semver = require('semver');
const minimums = {
  lodash: '4.17.21',
  'hosted-git-info': '2.8.9',
  browserslist: '4.16.6',
  'path-parse': '1.0.7',
  tmpl: '1.0.5',
  ajv: '6.12.6',
  minimist: '1.2.6',
  'decode-uri-component': '0.2.2',
  json5: '2.2.3'
};
const seen = new Set();
const failures = [];
function check(dependencies) {
  for (const [name, entry] of Object.entries(dependencies || {})) {
    let minimum = minimums[name];
    if (name === 'ansi-regex') {
      minimum = {'3': '3.0.1', '4': '4.1.1', '5': '5.0.1', '6': '6.0.1'}[semver.major(entry.version)];
      assert(minimum, 'Review newly introduced ansi-regex major');
    }
    if (minimum) {
      seen.add(name);
      if (!semver.gte(entry.version, minimum)) failures.push(`${name}@${entry.version} < ${minimum}`);
    }
    check(entry.dependencies);
  }
}
check(lock.dependencies);
assert.deepStrictEqual(failures, [], 'All installed lockfile paths must meet security floors');
for (const name of [...Object.keys(minimums), 'ansi-regex']) assert(seen.has(name), `Missing ${name}`);
const parsed = require('json5').parse('{"__proto__": {"polluted": true}}');
assert.strictEqual(Object.getPrototypeOf(parsed), Object.prototype);
assert.strictEqual(Object.prototype.hasOwnProperty.call(parsed, '__proto__'), true);
assert.strictEqual({}.polluted, undefined);
assert.deepStrictEqual(require('browserslist')('chrome 80'), ['chrome 80']);
assert.strictEqual(require('decode-uri-component')('%E0%A4%A'), '%E0%A4%A');
assert.strictEqual(require('tmpl')('Hello {name}', {name: 'world'}), 'Hello world');
assert.strictEqual(require('ajv')().validate({type: 'string'}, 'ok'), true);
console.log('Dependency floors and compatibility/security regressions passed');
