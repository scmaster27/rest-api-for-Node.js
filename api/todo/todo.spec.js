const app = require('../../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

let id = 0;
describe('TodoTest', () => {
  describe('POST /todo', () => {
    it('todoデータ登録', (done) => {
      let todo = {
        title: 'title_create',
        content: 'content_create'
      };
      chai.request(app)
      .post('/todo')
      .send(todo)
      .end((err, res) => {
        id = res.body;
        res.should.have.status(200);
        done();
      });
    });
  });
  describe('GET /todo', () => {
    it('全てのtodoデータ取得', (done) => {
      chai.request(app)
      .get('/todo')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe('GET/:id todo', () => {
    it('特定idに紐づくtodoデータ取得', (done) => {
      chai.request(app)
      .get('/todo/' + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe('Put/:id todo', () => {
    it('特定idに紐づくtodoデータ更新', (done) => {
      let todo = {
        title: 'title_update',
        content: 'content_update'
      };
      chai.request(app)
      .put('/todo/' + id)
      .send(todo)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });
  describe('Delete/:id todo', () => {
    it('特定idに紐づくtodoデータ削除', (done) => {
      chai.request(app)
      .delete('/todo/' + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });
});

