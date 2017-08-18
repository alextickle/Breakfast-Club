const schema = require('./schema').schema;
const app = require('../app');
const usersQuery = require('./test-queries/usersQuery');

let apiUrl;
if (process.env.NODE_ENV === 'production') {
	apiUrl = '/';
} else {
	apiUrl = 'http://localhost:4000/';
}

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

		async () => {
			try {
				let resp = await fetch(usersQuery);
				expect(resp).toBeDefined();

				let projects = resp['data']['users'];
				expect(users.length).toBeGreaterThan(0);
				expect(users[0].firstName).toBeDefined();
        done();
			} catch (err) {
				console.error(err);
				fail(err);
			}
			server.close();
			console.log('server closed');
		}();
	});
});
