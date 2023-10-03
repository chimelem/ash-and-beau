import {CartForm, Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {ShoppingBagIcon} from '@heroicons/react/24/outline';
import {useVariantUrl} from '~/utils';
import {CustomButton, GroupIconButton} from './buttons';
import classNames from 'classnames';

export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  const count = cart?.totalQuantity || 0;

  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className={`${className} h-full`}>
      <CartEmpty count={count} hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}

function CartDetails({layout, cart}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  // console.log('cart', cart);

  return (
    <div className="cart-details flex flex-col justify-between h-full">
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {lines.nodes.map((line) => (
            <CartLineItem key={line.id} line={line} layout={layout} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function CartLineItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <li key={id} className="flex w-full">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        {image && (
          <Image
            alt={title}
            aspectRatio="1/1"
            data={image}
            height={100}
            loading="lazy"
            width={100}
            className="h-full w-full object-cover object-center"
          />
        )}
      </div>

      <Link
        className="w-full"
        prefetch="intent"
        to={lineItemUrl}
        onClick={() => {
          if (layout === 'aside') {
            // close the drawer
            window.location.href = lineItemUrl;
          }
        }}
      >
        <div className="ml-4 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3 className="grow text-xl font-bold">{product.title}</h3>
              <CartLinePrice line={line} as="span" />
            </div>
            <div className="my-3 flex justify-between ">
              <ul>
                {selectedOptions.map((option) => (
                  <li
                    className='className="mt-1 text-sm text-gray-500"'
                    key={option.name}
                  >
                    {option.name}: {option.value}
                  </li>
                ))}
              </ul>

              <CartLineRemoveButton lineIds={[id]} />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <CartLineQuantity line={line} />
          </div>
        </div>
      </Link>
    </li>
  );
}

function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <a
          href={checkoutUrl}
          target="_self"
          className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-500"
        >
          Continue to Checkout
        </a>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          <Link
            to="/collections/all"
            className="pl-2 font-medium text-secondary hover:text-secondary-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export function CartSummary({cost, layout, children = null}) {
  const className = layout === 'page' ? 'cart-summary-page' : '';

  return (
    <div className="w-full border-t border-gray-200 py-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        {cost?.subtotalAmount?.amount ? (
          <Money data={cost?.subtotalAmount} />
        ) : (
          '-'
        )}
      </div>
      {children}
    </div>
  );
}

function CartLineRemoveButton({lineIds}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <button type="submit">Remove</button>
    </CartForm>
  );
}

function CartLineQuantity({line}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return <GroupIconButton line={line} dark={false} />;
}

function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div>
      <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />
    </div>
  );
}

export function CartEmpty({count, hidden = false, layout = 'aside'}) {
  return (
    <div
      className={classNames('flex w-full h-full items-center justify-center', {
        'hidden p-0': hidden,
      })}
    >
      <div className="m-8 my-20">
        <div className="relative mb-6 ">
          <div className="px-2 py-1 absolute top-0 right-14 bg-primary rounded-full text-white">
            {count}
          </div>
          <ShoppingBagIcon className="h-12 w-12  mx-auto" aria-hidden="true" />
        </div>
        <div className="mb-8">
          <p className="text-lg text-black text-center font-bold">
            Your cart is empty!
          </p>
        </div>
        <div className="space-y-4">
          <CustomButton
            text="Continue shopping"
            onClick={() => {
              if (layout === 'aside') {
                window.location.href = '/collections/all';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

function CartDiscounts({discountCodes}) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <div>
      {/* Have existing discount, display it with a remove option */}
      <dl hidden={!codes.length}>
        <div>
          <dt>Discount(s)</dt>
          <UpdateDiscountForm>
            <div className="cart-discount">
              <code>{codes?.join(', ')}</code>
              &nbsp;
              <button>Remove</button>
            </div>
          </UpdateDiscountForm>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div>
          <input type="text" name="discountCode" placeholder="Discount code" />
          &nbsp;
          <button type="submit">Apply</button>
        </div>
      </UpdateDiscountForm>
    </div>
  );
}

function UpdateDiscountForm({discountCodes, children}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}
