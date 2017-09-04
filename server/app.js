const express = require('express');
const bodyParser = require('body-parser');
const schema = require('./schema').schema;
const graphqlExpress = require('graphql-server-express').graphqlExpress;
const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
const path = require('path');
const PORT = process.env.PORT || 4000;
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({
		schema
	})
);

if (process.env.NODE_ENV !== 'development') {
	app.use(
		'/graphiql',
		graphiqlExpress({
			endpointURL: '/graphql'
		})
	);
}

app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
	app.listen(PORT, function() {
		console.log(`listening on port ${PORT}!`);
	});
}

module.exports = app;
