
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Mountain1 from './Pictures/Mountain1.jpeg';
import Mountain2 from './Pictures/Mountain2.jpeg';
import Mountain3 from './Pictures/Mountain3.jpg';
// import pic3 from "./pic3.jpg";




function Mountain(props) {
  return (
    <div>
      <CardDeck>
         <Card>
         <Card.Img variant="top" src={Mountain1} />
        <Card.Body>
        <Card.Title>Mount Rainier</Card.Title>
        <Card.Text>
        Mount Rainier (/reɪˈnɪər/), also known as Tahoma or Tacoma, 
        is a large active stratovolcano in the Cascade Range of the Pacific Northwest, 
        ocated in Mount Rainier National Park about 59 miles (95 km) south-southeast of Seattle.[4] 
        With a summit elevation of 14,411 ft (4,392 m)
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated .. mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Mountain2} />
    <Card.Body>
      <Card.Title>Grand Teton</Card.Title>
      <Card.Text>
      Grand Teton National Park is an American national park in northwestern Wyoming. At approximately 310,000 acres 
      (480 sq mi; 130,000 ha; 1,300 km2), the park includes the major peaks of the 40-mile-long (64 km) 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Mountain3} />
    <Card.Body>
      <Card.Title>Mount washington</Card.Title>
      <Card.Text>
      Mount Washington, called Agiocochook by some Native American tribes, 
      is the highest peak in the Northeastern United States at 6,288.2 ft (1,916.6 m) and 
      the most topographically prominent mountain east of the Mississippi River.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated ... mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}


export default Mountain;








