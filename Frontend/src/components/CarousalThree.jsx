import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import C1 from '../assets/contact1.jpg';
import C2 from '../assets/contact2.jpg';
import C3 from '../assets/contact3.jpg';

function UncontrolledExample() {
  return (
    <Carousel controls={false}  indicators={false}>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={C1} altText="First slide"/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={C2} altText="First slide"/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={C3} altText="First slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;