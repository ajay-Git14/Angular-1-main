const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');

const cases = [
  ['legacy/01-logger.js', 'Class decorator executed\nTeaching TypeScript\n'],
  ['legacy/02-company-factory.js', 'Company: Techlambda\nLearning\n'],
  ['legacy/03-method.js', 'Calling teach with Decorators\nTeaching Decorators\n'],
  ['legacy/04-property.js', 'Decorated property: name\nTrainer name: Asha\n'],
  ['legacy/05-parameter.js', 'Parameter index 0 in teach\nTeaching Angular\n'],
  ['legacy/06-metadata-simulator.js', '{"kind":"component","selector":"app-home"}\n{"kind":"service"}\n'],
  ['standard/01-standard-decorators.js', 'Registered class: Trainer\nCalling teach\nTeaching Modern Decorators\n'],
];
for (const [file, expected] of cases) {
  const actual = execFileSync(process.execPath, [path.join(__dirname, '..', 'dist', file)], {encoding:'utf8'});
  assert.equal(actual, expected, file);
  console.log('PASS', file);
}
console.log(`PASS ${cases.length}/${cases.length} executable TypeScript examples`);
