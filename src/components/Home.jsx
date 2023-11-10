import "../style/Home.css";
import installationGif from "../gifs/schema.gif";
import schemaGeneration from "../gifs/schemaGeneration.gif";
import testing from "../gifs/testing.gif";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <div className="landing">
        <br></br>
        <p>Generate GraphQL schemas and resolvers for your Mongo schemas.</p>
        <div className="btn-section">
          <div className="copy1">
            <div id="npm-info">
              <p className="question">$</p>
              <p className="npm">npm i apollomatic</p>
              <p className="clipboard">
                <span>
                  <FontAwesomeIcon
                    icon={faClipboard}
                    style={{ color: "#464749" }}
                  />
                </span>
              </p>
            </div>
          </div>
          <a href="https://www.npmjs.com/package/apollomatic">
            <button type="button" className="btn btn-outline-dark">
              NPM Package
            </button>
          </a>
        </div>
      </div>
      <div className="package-desc">
        {/* <img src={installationGif} alt="loading..." /> */}
        {/* Potentially add a one liner abt what the user will see below  */}
        {/* Get started section */}
        <Container>
          <h1>How to get started with ApolloMatic?</h1>
          <Row>
            <Col xs={12} md={7} className="gif-container">
              <img
                src={installationGif}
                alt="This GIF provides a comprehensive guide on installing the ApolloMatic package in your project, configuring the Apollo settings file, and populating it with Mongoose schema models."
                className="gif"
              />
            </Col>
            <Col xs={12} md={5} className="gif-desc">
              <h2>The Set Up</h2>
              <hr />
              <h5>
                Download the ApolloMatic NPM package, set up your
                apollo-config.js file, run the terminal command, and experience
                the magic of ApolloMatic.
              </h5>
            </Col>
          </Row>

          {/* Apollomatic in action section */}

          <Row>
            <Col xs={12} md={5} className="gif-desc-left">
              <h2>ApolloMatic in Action</h2>
              <hr />
              <h5>
                Enjoy the creation of functional GraphQL schemas and resolvers
                with one simple command. Wave goodbye to complex mapping as
                Apollomatic aligns your GraphQL schema to match your MongoDB
                configurations.
              </h5>
            </Col>
            <Col xs={12} md={7} className="gif-container">
              <img
                src={schemaGeneration}
                alt="This GIF demonstrates ApolloMatic in action, guiding users through the generated file structure, complete with the created type definitions, queries, and mutations."
                className="gif"
              />
            </Col>
          </Row>

          {/* Testing apollomatic section */}

          <Row>
            <Col xs={12} md={7} className="gif-container">
              <img
                src={testing}
                alt="This GIF demonstrates the testing of generated queries and mutations within Apollo Studio."
                className="gif"
              />
            </Col>
            <Col xs={12} md={5} className="gif-desc">
              <h2>Enjoy the Magic of Apollomatic</h2>
              <hr />
              <h5>
                After creating your Apollo server, test out your auto-generated
                resolvers in Postman or Apollo Studio.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
