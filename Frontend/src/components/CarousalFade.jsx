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
          <h3>Vast Collection of Resources</h3>
          <p>A library should have a wide range of books, journals, and other materials to cater to the diverse needs of its users.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
      <ExampleCarouselImage imageUrl={L2} altText="First slide" />
        <Carousel.Caption>
          <h3>Comfortable Study Environment</h3>
          <p>Peaceful and conducive environment for study and research is crucial. This includes comfortable seating, adequate lighting, and minimal noise.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
      <ExampleCarouselImage imageUrl={L3} altText="First slide" />
        <Carousel.Caption>
          <h3>Collaborative Spaces</h3>
          <p>Spaces that encourage collaboration and group work, such as group study rooms or collaborative workstations.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;