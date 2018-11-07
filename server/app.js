const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/SmeetDB',{ useNewUrlParser: true });


mongoose.connection.once('open', function(){
    console.log('conneted to database');
}).on('error', function(error){
    console.log('Connection error:', error);
});



app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=> {
    console.log('now listening for request on port 4000');
});


