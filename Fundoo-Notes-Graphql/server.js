const express = require('express')
const { ApolloServer} = require('apollo-server-express');
var path = require('path-posix')

const typeDefs = require('./app/typeDefs/userSchema');
const resolvers = require('./app/resolvers/userResolver');
const dbconfig = require('./config/db.config')

require('dotenv').config();

dbconfig.dbConnection();

//async function startServer(){
    
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    const app = express()

    //await apolloServer.start()

    apolloServer.applyMiddleware({ app });

    // app.use((req,res) => {
    //     res.send("hello from express apollo server");
    // });

   
    app.listen(process.env.Port, () => console.log('server is running '))
//}
//startServer();