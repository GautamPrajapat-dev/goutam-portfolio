import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import HomeImg from "../Assets/Home.png";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
const Home = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Container
      className="text-light h-100 w-100 d-flex align-items-center justify-content-evenly "
    >
      <Row className="d-flex align-items-center ">
        <Col 
          className=""
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div>
            <h2>Hi,</h2>
            <h1>I'm Goutam Prajapat</h1>
            <h1>Web Developer</h1>
          </div>
          <p className="">
            Without Requirements or design, Program Programming is the art of
            adding bugs to an empty text file.
          </p>
          <Button className="text-bg-danger">Hire Me</Button>
        </Col>
        <Col 
          className="d-flex justify-content-center align-items-center "
          data-aos="zoom-out-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="linear"
          data-aos-delay="900"
          data-aos-offset="4"
        >
          <Image src={HomeImg} alt="Home" width={300} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
