import {useNavigate} from '@remix-run/react';
import {
  CartForm,
  flattenConnection,
  Image,
  Money,
  useMoney,
} from '@shopify/hydrogen';
import {useMemo} from 'react';
import {
  AddToCartButton,
  CustomButton,
  GroupIconButton,
} from '~/components/buttons';
import {getProductPlaceholder} from '~/lib/placeholders';

function ProductSection({data, shop, cart}) {
  const navigate = useNavigate();

  const product = data?.nodes[0];
  const {price, compareAtPrice, image} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  const inCart = useMemo(() => {
    const itemsInCart = cart?.lines?.nodes;
    if (!itemsInCart?.length) {
      return false;
    }
    const match = itemsInCart.every(
      (item) => item?.merchandise?.id === firstVariant?.id,
    );

    return match;
  }, [cart, firstVariant]);

  const line = useMemo(() => {
    const cartLines = cart?.lines?.nodes;
    if (!cartLines?.length) return null;

    const match = cartLines.find(
      (item) => item?.merchandise?.id === firstVariant?.id,
    );

    return match;
  }, [cart, firstVariant]);

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.product.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  // console.log('firstVariant', firstVariant);
  // console.log('cardProduct', cardProduct);
  // console.log('cart', cart);

  return (
    <section className="w-full gap-0 grid grid-cols-1 sm:grid-cols-2">
      <div className="w-full h-full">
        <img src={image?.url} ait="" className="w-full h-full" />
      </div>
      <div className="relative pt-20 flex flex-col justify-end overflow-hidden">
        <div className=" relative p-8 z-10 w-full sm:max-w-lg">
          <h1 className="text-4xl text-white capitalize mb-4">
            {product?.title}
          </h1>
          {/* {fCurrency(price?.amount, price?.currencyCode)} */}
          <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
            <Money
              withoutTrailingZeros
              data={price}
              className="text-2xl text-white"
            />
            {isDiscounted && (
              <Money
                className="line-through opacity-50 text-2xl text-white"
                withoutTrailingZeros
                data={compareAtPrice}
              />
            )}
          </span>
          <p className="text-sm text-gray-100 py-5 line-clamp-3">
            {product?.description}
          </p>
          <div className="mt-5">
            <GroupIconButton line={line} />
          </div>

          <div className="w-full">
            {inCart ? (
              <CustomButton
                text="View Product"
                style={{width: '100%'}}
                onClick={() => navigate(`/products/${product.handle}`)}
              />
            ) : firstVariant.availableForSale ? (
              <AddToCartButton
                lines={[
                  {
                    quantity: 1,
                    merchandiseId: firstVariant.id,
                  },
                ]}
                variant="secondary"
                className="mt-2"
                analytics={{
                  shopId: shop.id,
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}
              >
                Add to Bag
              </AddToCartButton>
            ) : (
              <button
                variant="secondary"
                className="mt-2 bg-secondary"
                disabled
              >
                <span className="flex items-center justify-center gap-2">
                  Sold out
                </span>
              </button>
            )}
          </div>
        </div>
        <div
          className="absolute z-4 top-0 bottom-0 w-full h-full bg-cover blur-lg saturate-100 scale-[2.7] bg-no-repeat bg-left-top overflow-hidden"
          style={{
            backgroundImage: `url(${image?.url})`,
          }}
        />
      </div>
    </section>
  );
}

export default ProductSection;
