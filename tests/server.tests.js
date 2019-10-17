const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

const endpoints = [
  '/',
  '/about',
  '/events',
  '/support',
  '/research',
  '/downloads'
];

test('tape is working', t => {
  t.pass();
  t.end();
});



endpoints.map(endpoint => {
  test(`testing if ${endpoint} endpoint has a status code 200`, t => {
    request(app)
      .get(endpoint)
      .expect(200)
      .expect('content-type', /text/)
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });
});

test('testing if /random gives a status code of 404', t => {
  request(app)
    .get('/random')
    .expect(200)
    .expect('content-type', /text/)
    .end((err, res) => {
      t.error(err);
      t.ok(res.text.includes('Page Not Found'));
      t.end();
    });
});
