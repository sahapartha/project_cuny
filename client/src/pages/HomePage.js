import React from 'react';
import { Redirect } from 'react-router-dom';
import { Carousel } from 'antd';
import {Jumbotron,Button,Image} from 'react-bootstrap'

const contentStyle = {
    height: 'auto',
    width: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    //background: '#364d79',
    background: 'white',
  };
class HomePage extends React.Component{
    render() { 
        return (
          <div>
            {/* <Jumbotron>
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron> */}
            <Carousel autoplay effect="fade" style={{}}>
              <div>
                <h3 style={contentStyle}><Image  style={{height: '900',width: '100%'}}
      src="https://w.wallhaven.cc/full/rd/wallhaven-rd7ro1.jpg"
    /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><Image style={{height: '900',width: '100%'}}
      src="https://w.wallhaven.cc/full/rd/wallhaven-rd7drw.jpg"
    /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><Image style={{height: '900',width: '100%'}}
      src="https://w.wallhaven.cc/full/96/wallhaven-967zyk.jpg"
    /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><Image style={{height: '900',width: '100%'}}
      src="https://w.wallhaven.cc/full/dg/wallhaven-dg7y23.jpg"
    /></h3>
              </div>
            </Carousel>
          </div>
        );  
    }
}

export default HomePage;
