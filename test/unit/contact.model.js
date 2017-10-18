/* use strict */

const test = require('tape');
const model = require('../../app/model/Contact.model');

test('Contact is a model', t => {
  t.strictEqual(model.modelName, 'Contact');
  t.end();
});

test('Contact has a name', t => {
  t.strictEqual(typeof model.schema.obj.name, 'object');
  t.end();
});

test('Contact has an email', t => {
  t.strictEqual(typeof model.schema.obj.email, 'object');
  t.end();
});

test('Contact has a number', t => {
  t.strictEqual(typeof model.schema.obj.number, 'object');
  t.end();
});
