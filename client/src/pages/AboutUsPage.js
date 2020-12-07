import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import alamin from "./alamin.jpeg";
import "./AboutUs.css";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function AboutUsPage(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ order: 'last' }}>
          
          <Card className="bg-dark text-black">
          <Card.Img src={alamin} />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
           </Card.Text>
           <Card.Text>Last updated 3 mins ago</Card.Text>
           </Card.ImgOverlay>
           </Card>
           </Col>

          <Col xs>
          <Card className="bg-dark text-black">
          <Card.Img src={alamin} />
          <Card.ImgOverlay>
          <Card.Title>Alamin Hossain</Card.Title>
          <Card.Text>
           This is a wider card with supporting text below as a natural lead-in to
           additional content. This content is a little bit longer.
           </Card.Text>
           <Card.Text>This is roughly about me</Card.Text>
           </Card.ImgOverlay>
           </Card>
           </Col>

          <Col xs={{ order: 'first' }}>
          <Card className="bg-dark text-black">
          <Card.Img src={alamin} />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
          </Card>
          </Col>
    {/* <div>A little info about us.</div> */}
          </Row>
          </Container>
          </div>
  );
}

export default AboutUsPage;

{/* <Container>
  
    First, but last
   Second, but unordered</Col>
    Third, but first
   */}
