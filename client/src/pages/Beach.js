import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Beach1 from './Pictures/Beach1.jpeg';
import Beach2 from './Pictures/Beach2.jpeg';
import Beach3 from './Pictures/Beach3.jpeg';




function Beach() {
  return (
    <div>
      <CardDeck>
         <Card>
         <Card.Img variant="top" src={Beach1} />
        <Card.Body>
        <Card.Title>Siesta Beach</Card.Title>
        <Card.Text>
        Siesta Beach (sometimes known as Siesta Key Beach) is a beach located on Siesta Key in the U.S. state of Florida.
         Unlike beaches elsewhere that are made up mostly of pulverized coral, Siesta Beach's sand is 99% quartz, most of which comes from the Appalachian Mountains.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Beach2} />
    <Card.Body>
      <Card.Title>Kaanapali Beach</Card.Title>
      <Card.Text>
      Kaanapali (Hawaiian: Kāʻanapali) is a census-designated place (CDP) in Maui County, 
      Hawaii, United States. The population was 1,250 at the 2010 census.[1] The master-planned town is 
      located in the Old Hawaii ahupuaa of Hanakaʻōʻō, as in the same name of the southern end of Kaanapali Beach's Hanakaʻōʻō 
      Canoe Beach.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Beach3} />
    <Card.Body>
      <Card.Title>Cannon Beach</Card.Title>
      <Card.Text>
      Cannon Beach is a city in Clatsop County, Oregon, United States. The population was 1,690 at the 2010 census. 
      Cannon Beach is a popular coastal tourist destination in Oregon, famous for Haystack Rock, a 235 ft (72 m) sea 
      stack that juts out along the Pacific Coast.[6] In 2013, National Geographic listed Cannon Beach as "one of the world’s 
      100 most beautiful places."[6]
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


export default Beach;