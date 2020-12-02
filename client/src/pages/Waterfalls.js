

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Waterfall1 from './Pictures/Waterfall1.jpeg';
import Waterfall2 from './Pictures/Waterfall2.jpeg';
import Waterfall3 from './Pictures/Waterfall3.jpeg';



function Waterfalls(props) {
  return (
    <div>
      <CardDeck>
         <Card>
         <Card.Img variant="top" src={Waterfall1} />
        <Card.Body>
        <Card.Title>Bridalveil Fall</Card.Title>
        <Card.Text>
        Bridalveil Fall is one of the most prominent waterfalls in the Yosemite Valley in California.[1] 
        The waterfall is 188 metres (617 ft) in height and flows year round.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Waterfall2} />
    <Card.Body>
      <Card.Title>The Tahquamenon Falls</Card.Title>
      <Card.Text>
      The Tahquamenon Falls (/təˈkwɑːmiːnɑːn/ tuh-KWAH-mee-nahn or /təˈkwɑːmənən/ tuh-KWAH-muh-nuhn) are two different 
      waterfalls on the Tahquamenon River. Both sets are located near Lake Superior in the eastern Upper Peninsula of 
      Michigan
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Waterfall3} />
    <Card.Body>
      <Card.Title>Snoqualmie Falls</Card.Title>
      <Card.Text>
      Snoqualmie Falls is a 268-foot (82 m) waterfall in the northwest United States, located east of Seattle on the 
      ]Snoqualmie River between Snoqualmie and Fall City, Washington
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


export default Waterfalls;








