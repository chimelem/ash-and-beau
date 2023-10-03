import {Carousel} from 'react-responsive-carousel';
import {useNavigate} from '@remix-run/react';
import classNames from 'classnames';
import {CustomButton} from '../buttons';
import Container from '../container';

function HomeHero({data}) {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      <Carousel
        autoPlay
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        interval={6000}
        className="mt-20"
      >
        {data.map((item, index) => {
          const titleSplit = item.title.split(' ');
          const overlineSplit = item.overline.split(' ');
          return (
            <section
              key={index}
              className="px-0 relative overflow-clip w-full m-auto max-h-[900px] bg-white sm:px-4"
            >
              <Container>
                <div className="absolute z-10 bottom-0 bg-white h-32 w-full rounded-t-3xl hidden sm:block" />
              </Container>
              <div className="absolute flex flex-col justify-center h-full z-10 m-auto w-full text-center text-white">
                <div className="flex items-center justify-center mb-2 sm:mb-6">
                  {overlineSplit.map((overline, oIndex) => (
                    <h4
                      key={overline}
                      className={classNames(
                        'text-sm uppercase pt-10 px-1 sm:pt-2 sm:text-lg',
                        {
                          'text-primary':
                            oIndex === overlineSplit.length - 1 ||
                            oIndex === overlineSplit.length - 2,
                        },
                      )}
                    >
                      {overline}
                    </h4>
                  ))}
                </div>
                <div className="flex items-center justify-center mb-1 sm:mb-4">
                  {titleSplit.map((title, tIndex) => {
                    return (
                      <h1
                        key={title}
                        className={classNames(
                          'text-5xl text-center font-Libre font-light px-2 mb-12 sm:text-[150px]',
                          {
                            'text-primary': tIndex === titleSplit.length - 1,
                            'italic lighter': title === '&',
                          },
                        )}
                      >
                        {title}
                      </h1>
                    );
                  })}
                </div>
                <div>
                  <CustomButton
                    text={item.buttonText}
                    onClick={() => handleRoute(item.buttonLink)}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-1 sm:gap-4">
                {item.spread ? (
                  item.spread.map((image) => (
                    <img
                      key={image}
                      src={image}
                      className="h-full w-full object-cover"
                    />
                  ))
                ) : (
                  <img src={item?.image} alt="" />
                )}
              </div>
            </section>
          );
        })}
      </Carousel>
    </>
  );
}

export default HomeHero;
