import React from 'react';
import { Carousel, Card, Row, Col,Button  } from 'react-bootstrap';

const CardProduct = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Row className="">
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Simple UI</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center text-underline">Easy Booking</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Less Cost</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row className="d-flex justify-content-between">
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Easy Renting</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Ecofrendly</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-5 mt-5'>
            <Card className='card-card'>
              <Card.Img variant="top" src="https://source.unsplash.com/random/900x700/?books" />
              <Card.Body>
                <Card.Title className="text-center">Feasible</Card.Title>
                <Card.Text>
                  Description of Product 1 goes here.
                </Card.Text>
                <Card.Text className="text-center mb-3">Quantity: 10</Card.Text>
                <Button variant="outline-success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default CardProduct;
