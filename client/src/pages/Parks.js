import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Park1 from './Pictures/Park1.jpeg';
import Park2 from './Pictures/Park2.jpeg';
import Park3 from './Pictures/Park3.jpeg';




function Parks() {
  return (
    <div>
      <CardDeck>
         <Card>
         <Card.Img variant="top" src={Park1} />
        <Card.Body>
        <Card.Title>Acadia National Park</Card.Title>
        <Card.Text>
        Acadia National Park is an American national park located in the state of 
        Maine, southwest of Bar Harbor. The park preserves about half of Mount Desert Island, 
        many adjacent smaller islands, and part of the Schoodic Peninsula on the coast of Maine
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Park2}/>
    <Card.Body>
      <Card.Title>Zion National Park</Card.Title>
      <Card.Text>
      Zion National Park is an American national park located in southwestern Utah near the town of Springdale. A prominent feature of the 229-square-mile (590 km2) park is Zion Canyon, which is 15 miles (24 km) 
      long and up to 2,640 ft (800 m) deep.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Park3} />
    <Card.Body>
      <Card.Title>Shenandoah National Park</Card.Title>
      <Card.Text>
      Shenandoah National Park /ˈʃɛnənˌdoʊə/ (often /ˈʃænənˌdoʊə/) is an American national park that encompasses part of the Blue Ridge Mountains in the Commonwealth of Virginia. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}


export default Parks;







