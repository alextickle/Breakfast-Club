const schema = require('../schema').schema;
const app = require('../app');
const fetch = require('graphql-fetch')('http://localhost:3002/graphql');

const usersQuery = require('./test-queries/usersQuery');
const userQuery = require('./test-queries/userQuery');
const messageQuery = require('./test-queries/messageQuery');
const deleteMutation = require('./test-queries/deleteMutation');
const addMessageMutation = require('./test-queries/addMessageMutation');
const loginMutation = require('./test-queries/loginMutation');

let server;

beforeAll(() => {
  server = app.listen(3002);
  console.log('server listening on port 3002');
});

afterAll(() => {
  server.close();
  console.log('server closed');
});

describe('Test graphql queries and mutations', () => {
  let vars;
  let id;
  let resp;

  it('Should have query and mutation fields on schema', done => {
    expect(schema.getQueryType()).toBeDefined();
    expect(schema.getMutationType()).toBeDefined();
    done();
  });

  it('Should execute usersQuery', done => {
    (async () => {
      try {
        resp = await fetch(usersQuery);
        expect(resp).toBeDefined();

        let users = resp['data']['users'];
        expect(users.length).toBeGreaterThan(0);
        expect(users[0].email).toBeDefined();
        done();
      } catch (err) {
        console.error(err);
        fail(err);
      }
    })();
  });

  it('Should execute userQuery with given email', done => {
    vars = { email: 'colin@testing.com' };
    (async () => {
      try {
        resp = await fetch(userQuery, vars);
        expect(resp).toBeDefined();

        let user = resp['data']['user'];
        expect(user.firstName).toBe('Colin');
        done();
      } catch (err) {
        console.error(err);
        fail(err);
      }
    })();
  });

  it('Should execute addMessage', done => {
    vars = {
      content: 'test',
      user_id: '-Ktxhg2-q7knOMUhBnQ4'
    };
    (async () => {
      try {
        resp = await fetch(addMessageMutation, vars);
        expect(resp).toBeDefined();
        let message = resp['data']['addMessage'];
        id = message.id;
        expect(message.content).toBe('test');
        done();
      } catch (err) {
        console.error(err);
        fail(err);
      }
    })();
  });

  it('Should execute delete', done => {
    vars = {
      type: 'Message',
      id: id
    };
    (async () => {
      try {
        resp = await fetch(deleteMutation, vars);
        expect(resp).toBeDefined();
        vars = {
          id: id
        };
        resp = await fetch(messageQuery, vars);
        expect(resp).toBeDefined();
        expect(resp['data']['message']).toBeNull();
        done();
      } catch (err) {
        console.error(err);
        fail(err);
      }
    })();
  });

  it('Should login correctly', done => {
    vars = {
      email: 'gabe@testing.com',
      password: 'test123'
    };
    (async () => {
      try {
        resp = await fetch(loginMutation, vars);
        expect(resp).toBeDefined();
        let both = resp['data']['login'].split(' ');
        expect(both[0]).toBe('gabe@testing.com');
        expect(both[1]).toBe('true');
        done();
      } catch (err) {
        console.error(err);
        fail(err);
      }
    })();
  });
});
