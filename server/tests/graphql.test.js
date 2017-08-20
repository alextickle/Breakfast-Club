'use strict';
const schema = require('../schema').schema;
const app = require('../app');
const usersQuery = require('./test-queries/usersQuery');
const apiUrl =
	process.env.NODE_ENV === 'test' ? 'http://localhost:4000/graphql' : '/';
const fetch = require('graphql-fetch')(apiUrl);

describe('Test graphql schema', () => {
	it('Should have query and mutation fields', done => {
		expect(schema.getQueryType()).toBeDefined();
		expect(schema.getMutationType()).toBeDefined();
		done();
	});
});

describe('Test several graphql queries', () => {
	it('Should properly execute Graphql queries', done => {
		let server = app.listen(4000);
		console.log('server listening on port 4000');
		fetch(usersQuery)
			.then(resp => {
				expect(resp).toBeDefined();
				let users = resp['data']['users'];
				expect(users.length).toBeGreaterThan(0);
				expect(users[0].firstName).toBeDefined();
				server.close();
				console.log('server closed');
				done();
			})
			.catch(error => {
				server.close();
				console.log('server closed');
				fail(error);
			});
	});
});
