import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Card } from 'antd';
import { Divider, Typography } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Title,Text} = Typography;


function Post({id, mainpicture, nameoftheplace, description, rateplace, street, city, state, zipcode, category, parking, username}) {
  return (
    <div>
      <Container style={{ paddingTop: "30px", paddingBottom: "90px" }}>
        <Card mb-4 shadow>
          <div>
            <div style={{ paddingRight: "50px", clear: "both" }}>
              <Divider orientation="left" plain>
                <Title level={3}>
                  <Text strong>
                    <Link to={"/posts/" + id}>{nameoftheplace}</Link>
                  </Text>
                </Title>
              </Divider>
            </div>
            <Row className="justify-content-md-center">
              <Col sm="7">
                <div style={{ float: "left", clear: "right" }}>
                  <img src={mainpicture} width="600" height="400" alt="main" />{" "}
                </div>
              </Col>
              <Col sm="5">
                <ul style={{ listStyle: "none", paddingRight: "50px" }}>
                  <li style={{ fontSize: "25px", textDecoration: "bold" }}>
                  <Link to={"/posts/" + id}> {nameoftheplace}</Link>
                  </li>
                  <li>
                    <div>Description: {description} </div>
                  </li>
                  <li>
                    <div>
                      {" "}
                      Address: {street}, {city}, {state}, {zipcode}
                    </div>
                    <div>Parking: {parking}</div>
                  </li>
                  <li>
                    <div>Category: {category}</div>
                    <div>Rating {rateplace} </div>
                    
                    Poster by {username}
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
      {/*     
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/"+id}>{ nameoftheplace}</Link>
        </div><div>
         {description} </div>
         <div>
         <img src={mainpicture} width="600" height="400"  alt="main" /> </div>
         <div>{street}</div> 
         <div>{city}</div>
           <div>{state}</div>
           <div>{zipcode}</div>
           Parking: <div>{parking}</div>
         <div className="card-footer small text-muted text-right">
         <div> {rateplace} </div>
         <div>{category}</div>
          Made by user { username }
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default Post;