/* eslint-disable linebreak-style */
require('should');

const request = require('supertest');
const mongoose = require('mongoose');

process.env.Env = 'Test';

const app = require('../index.js');

const Book = mongoose.model('Book');
const agent = request.agent(app);

describe('Book Crud Test', () => {
  it('shuold allow abook to be posted and return read and _id', (done) => {
    const bookPost = { title: 'My Book', author: 'Kevin', genre: 'Fiction' };

    agent.post('/api/books')
      .send(bookPost)
      .expect(200)
      .end((err, results) => {
        // results.body.read.should.not.equal(false);
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Book.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
