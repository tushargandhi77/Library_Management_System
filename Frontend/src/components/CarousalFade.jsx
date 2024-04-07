import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage altText="First slide" imageUrl="https://source.unsplash.com/random/900x700/?food"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage altText="Second slide" imageUrl="https://source.unsplash.com/random/900x700/?burger"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='let-let'>
        <ExampleCarouselImage altText="Third slide" imageUrl="https://source.unsplash.com/random/900x700/?magic"/>
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