import React from 'react';
import { Redirect } from 'react-router-dom';
import { Carousel } from 'antd';

const contentStyle = {
    height: 'auto',
    width: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
class HomePage extends React.Component{
    render() { 
        return (
            <Carousel effect="fade">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
        );  
    }
}

export default HomePage;
