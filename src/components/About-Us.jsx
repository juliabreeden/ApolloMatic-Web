import "../style/AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import image
import john from "../imgs/team/john.jpeg";
import kahalia from "../imgs/team/kahalia.png";
import davis from "../imgs/team/davis.jpeg";
import julia from "../imgs/team/julia.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <Container>
          <div className="about-us-app">
            <h1>About Us</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="about-us-team">
            <h1>The Team</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="team">
            <Row>
              <Col>
                <img src={john} alt="John Bilunas" />
                <h3>John Bilunas</h3>
                <a href="https://github.com/john-bilunas">
                  <h5>@John Bilunas</h5>
                </a>
              </Col>
              <Col>
                <img src={davis} alt="Davis Kim" />
                <h3>Davis Kim</h3>
                <a href="https://github.com/mr-daviskim">
                  <h5>@Davis Kim</h5>
                </a>
              </Col>
              <Col>
                <img src={julia} alt="Julia Breeden" />
                <h3>Julia Breeden</h3>
                <a href="https://github.com/juliabreeden">
                  <h5>@Julia Breeden</h5>
                </a>
              </Col>
              <Col>
                <img src={kahalia} alt="Kahalia Stanberry" />
                <h3>Kahalia Stanberry</h3>
                <a href="https://github.com/KahaliaS">
                  <h5>@Kahalia Stanberry</h5>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
