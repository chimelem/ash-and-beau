// Demo store placeholders
const PLACEHOLDERS = {
  HEROS: [
    {
      title: "ASH & BEAU",
      subtitle: "",
      overline: "GROW THE HAIR YOU DESERVE",
      buttonText: "Shop Now",
      buttonLink: "/collections/all",
      spread: [
        "/images/hero1.jpeg",
        "/images/hero2.jpeg",
      ],
    },
  ],
  PRODUCT_INFO: [
    {
      title: 'Description',
      content:
        'We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down...',
    },
    {
      title: 'Size and Fit',
      content:
        'We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down...',
    },
    {
      title: 'Delivery and Returns',
      content: `The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them. Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.`,
    },
  ],
  PRODUCT: {
    label: 'Limited Edition',
    id: 'gid://shopify/Product/6730850828344',
    title: 'The Hydrogen',
    publishedAt: '2021-06-17T18:33:17Z',
    handle: 'snowboard',
    description:
      "Description Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you. The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days. Care Guide Clean well after use Wax regularly Specs Weight: 5 lb Length: 4 ft Width: 1 ft Manufactured on: 8/2/2021, 3:30:00 PM Manufactured by: Shopify",
    priceRange: {
      minVariantPrice: {
        amount: '775.0',
        currencyCode: 'CAD',
      },
      maxVariantPrice: {
        amount: '775.0',
        currencyCode: 'CAD',
      },
    },
    options: [
      {
        name: 'Color',
        values: ['Morning', 'Evening', 'Night'],
      },
      {
        name: 'Size',
        values: ['154', '158', '160'],
      },
    ],
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/41007289630776',
          image: {
            url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509',
            altText: 'The Hydrogen snowboard, color Morning',
            width: 1200,
            height: 1504,
          },
          price: {
            amount: '775.0',
            currencyCode: 'CAD',
          },
          compareAtPrice: {
            amount: '840.0',
            currencyCode: 'CAD',
          },
        },
      ],
    },
  },
  ABOUT: {
    title: "",
    subtitle: "We believe achieving great hear and a healthy scalp should not come with side effects. Our formula is a composition of natural oils that nourish your scalp and hair and in universally beneficial. With a little help from nature, you can achieve the hair you deserve.",
    description: "",
    image: "/images/flower.png",
    overline: "a journey to great hair naturally"
  },
  MARQUEE: [
    {
      title: "clean",
      image: "/images/leaf.png"
    },
    {
      title: "Natural",
      image: "/images/leaf.png"
    }, {
      title: "Effective",
      image: "/images/leaf.png"
    }, {
      title: "safe",
      image: "/images/leaf.png"
    },
    {
      title: "clean",
      image: "/images/leaf.png"
    },
    {
      title: "Natural",
      image: "/images/leaf.png"
    }, {
      title: "Effective",
      image: "/images/leaf.png"
    }, {
      title: "safe",
      image: "/images/leaf.png"
    }, {
      title: "clean",
      image: "/images/leaf.png"
    },
    {
      title: "Natural",
      image: "/images/leaf.png"
    }, {
      title: "Effective",
      image: "/images/leaf.png"
    }, {
      title: "safe",
      image: "/images/leaf.png"
    }
  ],
  PARTNER: {
    title: "<h1 class='text-4xl text-center'>Our Great <i>Hair</i> benefits</h1>",
    subtitle: "",
    logos: [
      {
        title: "Stimulate new hair growth",
        image: "/images/partner1.svg"
      },
      {
        title: "Decrease breakage and frizz",
        image: "/images/partner2.svg"
      }, {
        title: "Improve scalp health",
        image: "/images/partner3.svg"
      }, {
        title: "Increase density & thickness",
        image: "/images/partner4.svg"
      },
    ]
  },
  CAROUSEL: {
    title: "What’s in your hair growth oil?",
    subtitle: "A hand-selected combination of various natural oils known for their efficacy in promoting and maintaining hair health, enhanced with biotin to kickstart you journey to happier, healthier hair and scalp.",
    overline: "Our Ingredients",
    videos: [
      {
        title: "Biotin",
        subtitle: "Stimulates keratin production in hair and can increase rate of follicle growth. It is an essential micronutrient that research has shown to improve hair health.",
        videoLink: "/videos/video-demo.mp4",
        thumb: "/images/video-thumb1.png"
      },
      {
        title: "Vitamin C",
        subtitle: "Boosts collagen production in the skin and can enhance its elasticity. This essential nutrient is known for its skin-rejuvenating properties.",
        videoLink: "YKaiXY7zHxk",
        thumb: "/images/video-thumb2.jpg"
      },
      {
        title: "Omega-3 Fatty Acids",
        subtitle: "Supports brain health and can reduce inflammation throughout the body. These healthy fats are crucial for overall well-being.",
        videoLink: "BBqm53Mzn_k",
        thumb: "/images/video-thumb3.jpg"
      },
      {
        title: "Coenzyme Q10 (CoQ10)",
        subtitle: "cts as an antioxidant, helping to protect cells from damage. CoQ10 is essential for maintaining optimal heart health.",
        videoLink: "sCgMxa7q_Bo",
        thumb: "/images/video-thumb4.jpg"

      },
      {
        title: "Probiotics",
        subtitle: " Promote a healthy gut microbiome and can improve digestion. These beneficial bacteria play a key role in maintaining gut health.",
        videoLink: "gJpXlRkW6Fw",
        thumb: "/images/video-thumb5.jpg"

      },

      {
        title: "Vitamin D",
        subtitle: "Supports bone health and can boost the immune system. Adequate vitamin D is vital for maintaining overall health.",
        videoLink: "0x_UKF8AAjs",
        thumb: "/images/video-thumb6.jpg"

      },
      {
        title: "Magnesium",
        subtitle: "Aids in muscle relaxation and can reduce the risk of muscle cramps. Magnesium is an essential mineral for proper bodily function.",
        videoLink: "IXIoSEr8jiY",
        thumb: "/images/video-thumb7.jpg"

      },
      {
        title: "Zinc",
        subtitle: "Supports immune function and can help with wound healing. This essential mineral plays a critical role in overall health.",
        videoLink: "sCgMxa7q_Bo",
        thumb: "/images/video-thumb3.jpg"

      },
      {
        title: "Collagen",
        subtitle: "Enhances skin elasticity and can promote joint health. Collagen supplements are popular for their beauty and joint benefits.",
        videoLink: "BBqm53Mzn_k",
        thumb: "/images/video-thumb1.png"

      },
      {
        title: "Green Tea Extract",
        subtitle: "Provides antioxidants and may help with weight management. Green tea extract is known for its potential health-promoting properties.",
        videoLink: "gJpXlRkW6Fw",
        thumb: "/images/video-thumb5.jpg"

      },
    ]
  },
  TESTIMONY: {
    title: "What others have to say",
    subtitle: "",
    reviews: [
      {
        name: "Amanda G.",
        title: "Immediate and long lasting result",
        message: "As I am aging, I am noticing that I have considerably less volume and my hair feels flat, brittle and lifeless. After using the oil for about 3 months, I am definitely noticing the effects. My hair was immediately shinier, and smoother but with continued use I am also noticing new growth. My scalp also seems less itchy and dry. I think this product could have some benefit to anyone who tried it!",
        star: 5,
        verified: true,
      },
      {
        name: "Calvin S.",
        title: "IIt works!",
        message: "I’ve started experiencing male pattern baldness over the last few years and didn’t think there was anything that could stop or reverse it. I decided to try this product and was very surprised to see actual improvements in the fullness of my hair. I’m not sure if it’s going to get me back to what I used to have but so far I’m definitely impressed with the results. I plan to keep using it based on the results so far.",
        star: 5,
        verified: true,
      },
      {
        name: "Jaydinn A.",
        title: "PLEASANTLY SURPRISED",
        message: "I’ve tried everything out there to get my hair to its former glory – rollers, gummies, serums, you name it. My hopes weren’t high when I started to use this hair growth oil, but I’m pleasantly surprised. My hair felt so much softer after the first use and I’m not sure yet if it’s just coincidence, but I’m seeing baby hairs! I’m hopeful that I’ve finally stumbled on a product that works!",
        star: 5,
        verified: true,
      },
      {
        name: "Peter G.",
        title: "THE BEST",
        message: "“As I am aging, I am noticing that I have considerably less volume and my hair feels flat, brittle and lifeless. After using the oil for about 3 months, I am definitely noticing the effects. My hair was immediately shinier, and smoother but with continued use I am also noticing new growth. My scalp also seems less itchy and dry. I think this product could have some benefit to anyone who tried it! ”",
        star: 5,
        verified: true,
      },
      {
        name: "Brain G.",
        title: "AM IN BUSINESS NOW",
        message: "“As I am aging, I am noticing that I have considerably less volume and my hair feels flat, brittle and lifeless. After using the oil for about 3 months, I am definitely noticing the effects. My hair was immediately shinier, and smoother but with continued use I am also noticing new growth. My scalp also seems less itchy and dry. I think this product could have some benefit to anyone who tried it! ”",
        star: 5,
        verified: true,
      },
      {
        name: "Stewin G.",
        title: "STUNNING TOUCH",
        message: "“As I am aging, I am noticing that I have considerably less volume and my hair feels flat, brittle and lifeless. After using the oil for about 3 months, I am definitely noticing the effects. My hair was immediately shinier, and smoother but with continued use I am also noticing new growth. My scalp also seems less itchy and dry. I think this product could have some benefit to anyone who tried it! ”",
        star: 5,
        verified: true,
      }
    ]
  },
  SHOWCASE: {
    title: "<h1 class='font-bold font-Libre text-4xl text-center sm:text-7xl'>Grow the <i>hair you</i> deserve</h1>",
    subtitle: "Start your journey to healthier, thick hair.",
    buttonLink: "/collections/all",
    buttonText: "Shop Now",
    coverImage: "/images/product-cover.png",
    image: "/images/product-bottle.png",
  },
  VIDEO_DEMO: {
    title: "",
    videoLink: "/videos/video-demo.mp4",
    thumb: "/images/video-thumb8.jpeg"
  }

};

/**
 * getHeroPlaceholder() returns placeholder content when the expected metafields
 * don't exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary   File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

// export function getHeroPlaceholder(heros) {
//   if (!heros?.length) return [];

//   // when we pass a collection without metafields,
//   // we merge it with placeholder data
//   return heros.map((hero, index) => {
//     // assume passed hero has metafields data already
//     if (hero?.heading?.value) {
//       return hero;
//     }

//     // hero placeholder
//     const placeholder = PLACEHOLDERS.HEROS[index];

//     // prioritize metafield data if available, else the hero hero values
//     // otherwise the placeholder values
//     const byLine =
//       hero?.byLine || hero?.descriptionHtml
//         ? { value: hero.descriptionHtml }
//         : placeholder.byline;

//     const heading =
//       hero?.heading || hero?.title ? { value: hero.title } : placeholder.heading;

//     // merge hero placeholder with hero data
//     return {
//       heading,
//       byLine,
//       cta: hero?.cta || placeholder.cta,
//       handle: hero?.handle || placeholder.handle,
//       id: hero?.id || index,
//       spread: hero?.spread || placeholder.spread,
//       spreadSecondary: hero?.spreadSecondary || placeholder.spreadSecondary,
//       height: placeholder?.height || undefined,
//       top: placeholder?.top || undefined,
//     };
//   });
// }

// get product info placeholder data
export function getProductInfoPlaceholder() {
  function getMultipleRandom(arr, infos) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, infos);
  }
  return getMultipleRandom(PLACEHOLDERS.PRODUCT_INFO, 3);
}

export function getProductPlaceholder() {
  return PLACEHOLDERS.PRODUCT;
}

export function getHeros() {
  return PLACEHOLDERS.HEROS
}


export function getAbout() {
  return PLACEHOLDERS.ABOUT
}

export function getMarquee() {
  return PLACEHOLDERS.MARQUEE
}

export function getPartner() {
  return PLACEHOLDERS.PARTNER
}

export function getCarousel() {
  return PLACEHOLDERS.CAROUSEL
}

export function getShowcase() {
  return PLACEHOLDERS.SHOWCASE
}

export function getTestimoney() {
  return PLACEHOLDERS.TESTIMONY
}

export function getVideoDemo() {
  return PLACEHOLDERS.VIDEO_DEMO
}