import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic3 from "./pic3.jpg";
import pic2 from "./pic2.png";
import pic1 from "./pic1.jpg";
import { useHistory } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import './PlaceWidget.css';



class PlaceWidget extends React.Component {
    
  onSubmit = () => {
    return <Redirect  to= "/Parks/" />
  }

// function place(){
//   location.replace("/Parks");
// }



// function PlaceWidget() {

//   let history = useHistory();
//   const routeChange = () => {
//     history.push("./Parks")
//   }
 



  // const history = useHistory();

  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   history.push("./parks");
  // }


 render() {
  return (
    <div>
      <div class="searchIcon">
      <input
        
        type="text"
        placeholder="Search"
      
       />
       
      </div>
      <div class="button">
      <>
        <Button variant="primary" onClick={this.onSubmit}> Parks</Button>{' '}
        <Button variant="secondary">Beaches</Button>{' '}
        <Button variant="success">Waterfalls</Button>{' '}
        <Button variant="warning">Mountains</Button>{' '}
        <Button variant="danger">Hiking</Button> 
        <Button variant="info">Info</Button>{' '}
        <Button variant="dark">Hidden Gems</Button> 
        <Button variant="link">Link</Button>
      </>
     </div>
     <div>
      <Carousel>
       <Carousel.Item>
        <img
          className="d-block w-100"
           src={pic1}
           alt="First slide"
        />
       <Carousel.Caption>
       <h3></h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
       <img
        className="d-block w-100"
        src={pic2}
        alt="second slide"
       />
       <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
       <img
        className="d-block w-100"
        src={pic3}
        alt="Third slide"
       />
       <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
       </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
    </div>
    </div>
  );
}
}
export default PlaceWidget;


// so add buttons for different places, then add for chose your own then  redirect to map and get eh api. 