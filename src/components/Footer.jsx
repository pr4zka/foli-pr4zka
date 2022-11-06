import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Ivan.svg";
import lk from '../assets/img/lk.png'
import twitter from '../assets/img/Twitter-logo.svg.png'
import ig from '../assets/img/Ig.png'
import git from '../assets/img/github.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ivan-martinez/" target="blank">
                <img src={lk} />
              </a>
              <a href="https://twitter.com/ivan_yf666" target="blank">
                <img src={twitter} />
              </a>
              <a href="https://instagram.com/ivan.yf?igshid=YmMyMTA2M2Y=" target="blank">
                <img src={ig} />
              </a>
              <a href="https://github.com/pr4zka" target="blank">
                <img src={git} alt="ig" />
              </a>
            </div>
            <p>Ivan Martinez</p>
            <h2>ivanhakate1028@gmail.com</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
