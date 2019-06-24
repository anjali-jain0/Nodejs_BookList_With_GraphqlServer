const express = require('express');
const schema = require('./schema');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql:true
}));


app.listen('8080');
