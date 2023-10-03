import {Fragment, Suspense} from 'react';
import {Await, useLoaderData} from '@remix-run/react';
import {defer} from '@shopify/remix-oxygen';
import {HomeHero} from '~/components/hero';
import {
  AboutSection,
  BlogSection,
  CarouselSection,
  MarqueeSection,
  PartnerSection,
  ProductSection,
  QuoteSection,
  TestimonySection,
  VideoSection,
} from '~/components/sections';
import {
  getAbout,
  getCarousel,
  getHeros,
  getMarquee,
  getPartner,
  getShowcase,
  getTestimoney,
  getVideoDemo,
} from '~/lib/placeholders';
import {
  BLOGS_QUERY,
  HEADER_QUERY,
  PAGINATION_SIZE,
  PRODUCT_CARD_FRAGMENT,
} from '~/lib/fragments';

const BLOG_HANDLE = 'news';

export async function loader({params, context}) {
  const {storefront, cart} = context;

  const {language, country} = storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  // defer the cart query by not awaiting it
  const cartPromise = cart.get();

  // await the header query (above the fold)
  const headerPromise = storefront.query(HEADER_QUERY, {
    cache: storefront.CacheLong(),
    variables: {
      headerMenuHandle: 'main-menu', // Adjust to your header menu handle
    },
  });

  const featuredProducts = storefront.query(HOMEPAGE_FEATURED_PRODUCTS_QUERY, {
    variables: {
      country,
      language,
    },
  });

  const {blog} = await storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: BLOG_HANDLE,
      pageBy: PAGINATION_SIZE,
      language,
    },
  });

  return defer({
    cart: await cartPromise,
    header: await headerPromise,
    featuredProducts: await featuredProducts,
    blogs: blog,
  });
}

export default function Index() {
  const {featuredProducts, header, cart, blogs} = useLoaderData();
  const heros = getHeros();
  const marquee = getMarquee();
  const partner = getPartner();
  const about = getAbout();
  const carousel = getCarousel();
  const showcase = getShowcase();
  const testimoney = getTestimoney();
  const demo_video = getVideoDemo();

  const {shop} = header;

  // console.log('blog', blogs);

  return (
    <Fragment>
      <HomeHero data={heros} />
      <AboutSection data={about} />
      {featuredProducts && (
        <Suspense>
          <Await resolve={featuredProducts}>
            {({products}) => {
              if (!products?.nodes) return <></>;
              return <ProductSection data={products} shop={shop} cart={cart} />;
            }}
          </Await>
        </Suspense>
      )}
      <PartnerSection data={partner} />
      <MarqueeSection data={marquee} />
      <CarouselSection data={carousel} />
      <QuoteSection data={showcase} />
      <VideoSection data={demo_video} />
      <TestimonySection data={testimoney} />
      {blogs && (
        <Suspense>
          <Await resolve={blogs}>
            {({articles}) => {
              if (!articles?.edges) return <></>;
              return <BlogSection data={articles?.edges} />;
            }}
          </Await>
        </Suspense>
      )}
    </Fragment>
  );
}

export const HOMEPAGE_FEATURED_PRODUCTS_QUERY = `#graphql
  query homepageFeaturedProducts($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: 1) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;
