import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import L1 from '../assets/l1.jpg'
import L2 from '../assets/l2.jpg'
import L3 from '../assets/l3.webp'
import L4 from '../assets/L4.jpg'
function Carousal() {
  return (
    <Carousel className='rounded-2'>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L1} altText="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L2} altText="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl={L4} altText="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;