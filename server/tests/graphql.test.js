'use strict';
var schema = require('../schema').schema;
var app = require('../app');
var usersQuery = require('./test-queries/usersQuery');
var apiUrl =
	process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000/graphql';
var fetch = require('graphql-fetch')(apiUrl);

describe('Test graphql schema', () => {
	it('Should have query and mutation fields', done => {
		expect(schema.getQueryType()).toBeDefined();
		expect(schema.getMutationType()).toBeDefined();
		done();
	});
});

describe('Test several graphql queries', () => {
	it('Should properly execute Graphql queries', done => {
		var server = app.listen(4000);
		console.log('server listening on port 4000');
		fetch(usersQuery)
			.then(resp => {
				expect(resp).toBeDefined();
				var users = resp['data']['users'];
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
