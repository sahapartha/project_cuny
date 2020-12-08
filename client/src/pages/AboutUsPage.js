import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import alamin from "./alamin.jpeg";
import alamin5 from "./alamin5.jpg";
import Aboutbg from "./Aboutbg.jpg";
import Back from "./Back.jpeg";
import "./AboutUs.css";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { Card } from 'antd';

const { Meta } = Card;

var sectionStyle = {
  backgroundImage: `url(${Aboutbg})`,
  backgroundColor: 'rgba(255, 249, 192, 0.7)',
}


function AboutUsPage(props) {
  return (
    <div style={sectionStyle}
    >
      
      <Container style={{paddingTop:'80px', paddingBottom:'250px'}}>
      
      <Row>
        <Col><Card
    hoverable
    style={{ width: 280}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
  <Col>
  <Card 
    hoverable
    style={{ width: 280, height:450}}
    cover={<img alt="example" style={{ height:360}} src={alamin5} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
  <Col><Card
    hoverable
    style={{ width: 280 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></Col>
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
