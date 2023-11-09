//Need three separate components to render - mongo schema, graphQL schema, 
import React, {useEffect, useState, useContext} from 'react'; 
import GraphqlResolvers from './GraphqlResolvers.jsx'; 
import GraphqlSchema from './GraphqlSchema.jsx'; 
import MongoSchema from './MongoSchema.jsx'; 

const Playground = () => {
    return (
        <div className = 'playground-container'>
            <h1>Test it Out!</h1>
            <h2>Generate a GraphQL schema and GraphQL resolvers based on your Mongo schema. Paste your Mongo schema and the click generate to create the GraphQL outputs.</h2>
            <section className = 'input-container'>
                <div><MongoSchema></MongoSchema></div>
                <div><GraphqlSchema></GraphqlSchema></div>
                <div><GraphqlResolvers></GraphqlResolvers></div>
            </section>
        </div>
    )
}

export default Playground; 