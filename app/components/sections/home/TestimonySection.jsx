import Carousel from 'react-multi-carousel';
import {NextArrow, PrevArrow} from '~/components/buttons';
import {TestimonyCard} from '~/components/cards';
import Container from '~/components/container';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 3,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
};

const ButtonGroup = ({next, previous, goToSlide, ...rest}) => {
  const {
    carouselState: {currentSlide},
  } = rest;

  return (
    <div className="carousel-button-group absolute top-5 right-5 sm:top-0 sm:right-0">
      <PrevArrow hasPrev clickHandler={() => previous()} dark={false} />
      <NextArrow hasNext clickHandler={() => next()} dark={false} />
    </div>
  );
};

function TestimonySection({data}) {
  return (
    <section className="my-24 container mx-auto relative p-5 sm:p-0">
      <Container>
        <div className="flex flex-row items-center justify-between mb-20">
          <h1 className="text-4xl font-Libre text-black max-w-[250px] sm:max-w-full sm:text-6xl">
            {data.title}
          </h1>
          <div className="flex flex-row items-center justify-between">
            {/* <PrevArrow/>
            <NextArrow/> */}
          </div>
        </div>

        <Carousel
          swipeable
          draggable
          ssr
          infinite
          autoPlay={false}
          showDots={false}
          responsive={responsive}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          keyBoardControl={true}
          containerclassName="carousel-container relative"
          dotListclassName="custom-dot-list-style"
        >
          {data.reviews.map((item, index) => (
            <TestimonyCard key={index} item={item} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default TestimonySection;
