import React from 'react';
import { Card, Button } from 'react-bootstrap';

function events(){

    
return (
    <>
<div className="container">
    <div className="row">
        <div className="col-md-12"><h1 id="events">EVENTS</h1></div>
    </div>
</div>

<br></br>

<div className="container" id="ecards">
    <div className="row">
        <div className="col-md-4">

            <Card style={{ width: '18rem' }} className="maincards">
            <Card.Img variant="top" src={require ('../images/zenrocks.jpg')} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </div>

        <div className="col-md-4">

            <Card style={{ width: '18rem' }} className="maincards">
            <Card.Img variant="top" src={require ('../images/zenrocks.jpg')} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </div>

        <div className="col-md-4">

            <Card style={{ width: '18rem' }} className="maincards">
            <Card.Img variant="top" src={require ('../images/zenrocks.jpg')} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </div>
    </div>
</div>

    </>
)
}
export default events;