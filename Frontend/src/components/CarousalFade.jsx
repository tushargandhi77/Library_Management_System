import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import L1 from '../assets/second images/slide1.jpg';
import L2 from '../assets/second images/slide2.jpg';
import L3 from '../assets/second images/slide3.jpg';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage imageUrl={L1} altText="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
      <ExampleCarouselImage imageUrl={L2} altText="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
      <ExampleCarouselImage imageUrl={L3} altText="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;