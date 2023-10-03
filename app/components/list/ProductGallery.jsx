import {Image} from '@shopify/hydrogen';
import {Carousel} from 'react-responsive-carousel';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export default function ProductGallery({media, className}) {
  if (!media.length) {
    return null;
  }

  return (
    <Carousel
      swipeable
      autoPlay={false}
      showStatus={false}
      showIndicators={false}
      thumbWidth={150}
    >
      {media.map((med, i) => {
        const isFirst = i === 0;
        const isFourth = i === 3;
        const isFullWidth = i % 3 === 0;

        const image =
          med.__typename === 'MediaImage'
            ? {...med.image, altText: med.alt || 'Product image'}
            : null;

        return (
          <div className=" h-[350px] sm:h-[650px]" key={med.id || image?.id}>
            {image && (
              <Image
                loading={i === 0 ? 'eager' : 'lazy'}
                data={image}
                aspectRatio="4/5"
                className="object-cover w-full h-full aspect-square fadeIn"
              />
            )}
          </div>
        );
      })}
    </Carousel>
  );
}
