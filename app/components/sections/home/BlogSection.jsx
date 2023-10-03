import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import Carousel from 'react-multi-carousel';
import Container from '~/components/container';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 5,
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

function BlogSection({data}) {
  if (!data?.length) return null;

  return (
    <section className="relative w-full py-10">
      <Carousel
        swipeable
        draggable
        centerMode
        ssr
        infinite
        autoPlay={false}
        showDots={false}
        responsive={responsive}
        arrows={false}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        containerclassName="carousel-container"
        dotListclassName="custom-dot-list-style"
      >
        {data.map(({node: blog}) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.handle}`}
            state={blog}
            className="p-2 rounded-xl"
          >
            {blog.image && (
              <Image
                alt={blog.image.altText || blog.title}
                className="p-2 object-cover w-full rounded-xl"
                data={blog.image}
                aspectRatio="3/2"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            )}
          </Link>
        ))}
      </Carousel>
      <div className="w-full flex flex-col items-center">
        <div className="absolute z-20 bottom-0 container mx-auto h-20 rounded-tl-[40px] rounded-tr-[40px] bg-white" />
      </div>
    </section>
  );
}

export default BlogSection;
