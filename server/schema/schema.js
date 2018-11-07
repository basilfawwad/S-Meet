const graphql = require('graphql');
const _ = require('lodash');

const User = require('../models/user');


const {GraphQLObjectType,
       GraphQLString,
       GraphQLSchema,
       GraphQLID,
       GraphQLInt,
       GraphQLList} = graphql;

//dummy data


const UserType = new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type: GraphQLID},
        name:{type: GraphQLString},
        gender:{type: GraphQLString},
        email:{type: GraphQLString}
        
    })

});


const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //code to get data from db
                //return _.find(books,{id:args.id});
            }
        }
        
    }
});


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addUser:{
            type: UserType,
            args:{
                name:{type:GraphQLString},
                gender:{type:GraphQLString},
                email:{type:GraphQLString}
            },
            resolve(parent,args){
                let user = new User({
                    name: args.name,
                    gender: args.gender,
                    email:args.email
                });
                user.save();
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});