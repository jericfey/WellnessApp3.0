import React from "react";
import { Header, Container } from "semantic-ui-react";
import logo from "../assets/Logo2.png";
import Modal from "../components/Modal/login";
import Zoom from "react-reveal/Zoom";
import "../index.css";

function Home() {
  return (
    <Zoom>
      <div className="home">
        <Container textAlign="center">
          <img
            src={logo}
            alt="logo"
            style={{ height: "100%", padding: "2em 5em" }}
            className="logo"
          />
          <Header
            as="h3"
            textAlign="center"
            className="slogan"
            size="large"
            style={{ color: "black" }}
          >
            Your health, starts with YOU.
          </Header>
          <Modal />
        </Container>
      </div>
    </Zoom>
  );
}

export default Home;
