import "../style/Docs.css";
import Sidebar from "./Sidebar.jsx"; 
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

const Docs = () => {
    return (
        <div>
          <Sidebar /> {/* Render the Sidebar component here */}
          <section id="section1">
            <h2>Get Started</h2>
            <p>Summary of what project does.</p>
          </section>
          <section id="section2">
            <h2>Installation</h2>
            <p>Commands</p>
          </section>
          <section id="section3">
            <h2>Configuration</h2>
            <p>Config file. + supported mongoose types</p>
          </section>
          <section id="section4">
            <h2>Running Apollomatic</h2>
            <p>This is the content of Section 2.</p>
          </section>
          <section id="section5">
            <h2>Outputs</h2>
            <p>resolver file + Custom scalars, John stuff!!!.</p>
          </section>
          <section id="section6">
            <h2>Testing Resolvers</h2>
            <p>This is the content of Section 2.</p>
          </section>
          {/* Add more sections as needed */}
        </div>
      );
};

export default Docs; 