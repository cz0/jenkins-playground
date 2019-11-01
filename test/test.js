const request = require('supertest');
const { expect } = require('chai');
const app = require('../index.js');

describe('Get / should works', () => {
  let server

  beforeEach(() => {
    server = app.listen(3000);
  })

  afterEach(() => {
    server.close();
  })

  it('should return 200', async () => {
    await request(server)
      .get('/')
      .expect(200)
      .end();
  })
})
