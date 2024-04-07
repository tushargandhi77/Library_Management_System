import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
function Carousal() {
  return (
    <Carousel className='rounded-2'>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl="https://source.unsplash.com/random/900x700/?books" altText="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl="https://source.unsplash.com/random/900x700/?library" altText="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="let-let-let">
        <ExampleCarouselImage imageUrl="https://source.unsplash.com/random/900x700/?books" altText="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;