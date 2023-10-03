import PropTypes from 'prop-types';
import {PlusIcon, MinusIcon} from '@heroicons/react/20/solid';
import {CartForm} from '@shopify/hydrogen';
import {LoadingIcon} from '.';
import classNames from 'classnames';

GroupIconButton.defaultProps = {
  dark: true,
};

GroupIconButton.propTypes = {
  line: PropTypes.object,
  dark: PropTypes.bool,
};

function GroupIconButton({line, dark}) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const {id: lineId, quantity = 1} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div
      className={classNames(
        'relative border inline-flex shadow-sm rounded-lg mb-5',
        {
          'border-white/50': dark,
          'border-black/50': !dark,
        },
      )}
      role="group"
    >
      <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
        {({disabled, loading}) => (
          <button
            className={classNames(
              'z-10 rounded-l-lg text-sm font-medium px-4 py-2 backdrop-blur-xl backdrop-saturate-125',
              {
                'text-gray-900 bg-black/10 hover:bg-white/10': dark,
                'text-black bg-white/10 hover:bg-white/10': !dark,
              },
            )}
            aria-label="Decrease quantity"
            disabled={disabled || quantity <= 1}
            name="decrease-quantity"
            value={prevQuantity}
          >
            {loading ? (
              <LoadingIcon />
            ) : (
              <MinusIcon
                className={classNames('h-5 w-5 flex-none', {
                  'text-white': dark,
                  'text-black': !dark,
                })}
                aria-hidden="true"
              />
            )}
          </button>
        )}
      </CartLineUpdateButton>
      <p
        className={classNames(
          'z-10 text-sm font-medium px-4 py-2 backdrop-blur-xl backdrop-saturate-125',
          {
            'bg-black/10 text-white': dark,
            'bg-white/10 text-black': !dark,
          },
        )}
      >
        {quantity}
      </p>
      <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
        {({disabled, loading}) => (
          <button
            className={classNames(
              'z-10 text-sm font-medium px-4 py-2 rounded-r-lg backdrop-blur-xl backdrop-saturate-125',
              {
                'text-gray-900 bg-black/10 hover:bg-white/10': dark,
                'text-black bg-white/10 hover:bg-white/10': !dark,
              },
            )}
            aria-label="Increase quantity"
            name="increase-quantity"
            value={nextQuantity}
            disabled={disabled}
          >
            {loading ? (
              <LoadingIcon />
            ) : (
              <PlusIcon
                className={classNames('h-5 w-5 flex-none', {
                  'text-white': dark,
                  'text-black': !dark,
                })}
                aria-hidden="true"
              />
            )}
          </button>
        )}
      </CartLineUpdateButton>
    </div>
  );
}

function CartLineUpdateButton({lines, children: Component}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {(fetcher) => {
        return (
          <Component
            disabled={fetcher.state !== 'idle'}
            loading={
              fetcher.state === 'loading' || fetcher.state === 'submitting'
            }
          />
        );
      }}
    </CartForm>
  );
}

export default GroupIconButton;
