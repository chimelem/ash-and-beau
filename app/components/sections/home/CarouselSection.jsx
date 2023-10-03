import {useCallback} from 'react';
import {Carousel} from 'react-responsive-carousel';
import {useInView} from 'react-intersection-observer';
import Container from '~/components/container';
import VideoPlayer from '~/components/video';
import {NextArrow, PrevArrow} from '~/components/buttons';

function CarouselSection({data}) {
  const {ref: inViewRef, inView} = useInView({
    /* Optional options */
    threshold: 0,
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      inViewRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  return (
    <section className="px-4 mt-24 mb-52">
      <Container>
        <section className="my-24 relative" ref={setRefs}>
          <div className="flex flex-col items-center text-center">
            <p className="text-sm uppercase my-5">{data.overline}</p>
            <div className="max-w-xl">
              <h1 className="font-Libre text-4xl sm:text-6xl uppercase">
                {data.title}
              </h1>
              <p className="text-base my-5">{data.subtitle}</p>
            </div>
          </div>
        </section>

        <Carousel
          showIndicators
          swipeable
          showArrows
          autoPlay={false}
          showThumbs={false}
          showStatus={false}
          renderArrowNext={(clickHandler, hasNext) => (
            <NextArrow
              clickHandler={clickHandler}
              hasNext={hasNext}
              classes="absolute z-40 bottom-1/2 right-0 my-auto sm:bottom-5 sm:right-32"
            />
          )}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <PrevArrow
              clickHandler={clickHandler}
              hasPrev={hasPrev}
              classes="absolute z-40 bottom-1/2 right-100 my-auto sm:bottom-5 sm:right-60"
            />
          )}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 20,
              color: 'white',
              cursor: 'pointer',
            };
            const style = isSelected
              ? {...defStyle, color: 'black', backgroundColor: 'white'}
              : {...defStyle};
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                className="relative hidden text-[8px] items-center justify-center overflow-clip h-5 w-5 p-3 rounded-full backdrop-blur-xl backdrop-saturate-125 bg-black/10 text-white border border-white/50 hover:bg-white/10 sm:text-base sm:inline-flex"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {index}
                <span className="blur-effect rounded-full absolute z-4 top-0 bottom-0 right-0 left-0 backdrop-blur-xl backdrop-saturate-150 bg-black/10 w-full h-full" />
              </span>
            );
          }}
        >
          {data.videos.map((item, vIndex) => {
            return (
              <div key={item.title} className="relative">
                <div className="absolute hidden bottom-20 right-0 max-w-sm z-20 p-10 m-5 backdrop-blur-xl backdrop-saturate-150 bg-black/10 rounded-xl sm:block">
                  <h1 className="mb-5 font-bold font-Libre uppercase text-white text-2xl">
                    {item.title}
                  </h1>
                  <p className="text-gray-200">{item.subtitle}</p>
                </div>
                {inView && vIndex === 0 ? (
                  <div className="w-full object-cover h-[300px] rounded-[20px] sm:rounded-[40px] sm:h-[450px]">
                    <VideoPlayer play file={item.videoLink} controls={false} />
                  </div>
                ) : (
                  <img
                    src={item.thumb}
                    alt="..."
                    className="w-full object-cover h-[300px] rounded-[20px] sm:rounded-[40px] sm:h-[450px]"
                  />
                )}
              </div>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default CarouselSection;
