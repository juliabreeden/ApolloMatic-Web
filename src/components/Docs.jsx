import "../style/Docs.css";
import Sidebar from "./Sidebar.jsx"; 
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const Docs = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <Sidebar /> {/* Render the Sidebar component here */}
                    </div>
                    <div class="col-md-9">
                        <section id="section1">
                            <h2>Get Started</h2>
                            <br></br>
                            <p>Apollomatic is an NPM package designed to simplify the process of generating Apollo Server GraphQL schemas and resolvers from existing Mongo schemas. With just a single command, you can quickly jumpstart your GraphQL API without the need to manually define schemas and resolvers.</p>
                        </section>
                        <br></br>
                        <section id="section2">
                            <h2>Installation</h2>
                            <br></br>
                            <p>Before you can use Apollomatic, ensure you have Node.js and NPM installed on your system. To install Apollomatic, follow these steps:
                            <br></br>
                            <br></br>
                            Run the following command in your project's root directory:
                            <br></br>
                            <br></br>
                            npm install -g apollomatic
                            <br></br>
                            <br></br>
                            After installation, you will need to set up the config file that provides the NPM package the information it needs to setup the GraphQL outputs.</p>
                        </section>
                        <br></br>
                        <section id="section3">
                            <h2>Configuration</h2>
                            <br></br>
                            <h3>Setting Up</h3>
                            <p>To configure Apollomatic for your project, create an apollo-config.js file. This file contains the necessary information for Apollomatic to work. Here's how to set up your apollo-config.js:
                            <br></br>
                            <br></br>
                            1. Navigate to your project's root directory.
                            <br></br>
                            <br></br>
                            2. Locate the apollo-config.js file provided in the ApolloMatic package. You can find it in the "templates" directory.
                            <br></br>
                            <br></br>
                            3. Copy the config file and paste it into your project's root directory.
                            <br></br>
                            <br></br>
                            4. Modify the copied apollo-config.js file to match your project's specific configuration needs. You can refer to our documentation for guidance on configuring Apollo.
                            <br></br>
                            <br></br>
                            5. Save your changes.
                            <br></br>
                            <br></br>
                            Now, your project is configured with Apollo using the apollo-config.js file you customized.</p>
                            {/* Accepted Mongoose SchemaTypes */}
                            <br></br>
                            <h3>Compatible Mongoose SchemaTypes</h3>
                                <p>Some Mongoose SchemaTypes do not seamlessly convert to Apollo Server Scalars for GraphQL. Here is a list of supported Mongoose SchemaTypes along with their corresponding GraphQL scalars:</p>
                                <br></br>
                                <ul>
                                    <li>String - String</li>
                                    <li>Number - Float, If you would like this to be an Int instead, please manually change this</li>
                                    <li>Date - ApolloMaticDateScalar</li>
                                    <li>Buffer - ApolloMaticBufferScalar</li>
                                    <li>Boolean - Boolean</li>
                                    <li>Mixed - ApolloMaticMixedScalar</li>
                                    <li>ObjectId - ID</li>
                                    <li>Decimal128 - Float</li>
                                    <li>UUID - String</li>
                                    <li>Array - <em>Although there isn't a specific Array scalar, the array format will be preserved with the appropriate scalar type embedded within it.</em></li>
                            </ul>
                            <p>The custom scalars ApolloMaticDateScalar, ApolloMaticBufferScalar, and ApolloMaticMixedScalar have been created to allow for these Mongoose types to be properly converted to GraphQL within Apollo Server.</p>
                        </section>
                        <br></br>
                        <section id="section4">
                            <h2>Running Apollomatic</h2>
                            <br></br>
                            <p>Once the NPM package is installed and the config file is set up, you can use Apollomatic by running the following command in your terminal:
                            <br></br>
                            <br></br>
                            npx apollomatic
                            <br></br>
                            <br></br>
                            If the installation is successful, two new files will appear in your project directory: an index.js file under the "resolvers" folder (containing generated resolvers), and a schema.js file under the "src" folder (containing generated schemas).</p>
                        </section>
                        <br></br>
                        <section id="section5">
                            <h2>Outputs</h2>
                            <br></br>
                            <p>The sections below detail what you can expect to have populated in your generated files:</p>
                            <br></br>
                            <h3>Schema</h3>
                            <br></br>
                            <p>This will conatain a gql string that defines...</p>
                            <ul>
                                <li>Custom scalars that can be used as a data type for a field</li>
                                <li>Object types that describe the structure of each entity</li>
                                <li>Input types that define the structure needed to create or update an entity</li>
                                <li>Queries in the schema that allow clients to retrieve data for each entity type or a specific entity </li>
                                <li>Mutations in the schema that enable clients to create, update, or delete entities</li>

                            </ul>
                            <p></p>
                            <br></br>
                            <h3>Resolvers</h3>
                            <br></br>
                            <p>The resolvers file will contain a resolvers object that contains logic to...</p>
                            <ul>
                                <li>Read all instances of an entity </li>
                                <li>Read a specific instance of an entity</li>
                                <li>Create an instance of an entity</li>
                                <li>Delete an instance of an entity</li>
                                <li>Update an istance of an entity</li>
                            </ul>
                        </section>
                        <br></br>
                        <section id="section6">
                            <h2>Testing Resolvers</h2>
                            <br></br>
                            <p>You can test your generated resolvers in the following ways:
                            <br></br>
                            <br></br>
                            Apollo Studio: If you've set up an endpoint for your project, you can test your resolvers within Apollo Studio's Explorer interface. Note that data must be present in the connected database for the queries to return results.
                            <br></br>
                            <br></br>
                            Postman: Resolvers can also be tested using Postman. Ensure that the GraphQL option is selected for the 'Body' section, and the query and variables components should be configured.</p>
                        </section>
                        {/* Add more sections as needed */}
                    </div>
                </div>
                </div>
        </div>
      );
};

export default Docs; 