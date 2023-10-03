import {
  AnalyticsEventName,
  CartForm,
  getClientBrowserParameters,
  sendShopifyAnalytics,
} from '@shopify/hydrogen';
import {useEffect} from 'react';

import {usePageAnalytics} from '~/hooks/usePageAnalytics';
import {CustomButton} from '.';

export default function AddToCartButton({
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  disabled,
  analytics,
  ...props
}) {
  return (
    <CartForm
      route="/cart"
      inputs={{
        lines,
      }}
      action={CartForm.ACTIONS.LinesAdd}
    >
      {(fetcher) => {
        return (
          <AddToCartAnalytics fetcher={fetcher}>
            <input
              type="hidden"
              name="analytics"
              value={JSON.stringify(analytics)}
            />
            <CustomButton
              text={children}
              type="submit"
              disabled={disabled ?? fetcher.state !== 'idle'}
              style={{width: '100%'}}
              loading={
                fetcher.state === 'loading' || fetcher.state === 'submitting'
              }
              {...props}
            />
          </AddToCartAnalytics>
        );
      }}
    </CartForm>
  );
}

function AddToCartAnalytics({fetcher, children}) {
  const fetcherData = fetcher.data;
  const formData = fetcher.formData;
  const pageAnalytics = usePageAnalytics({hasUserConsent: true});

  useEffect(() => {
    if (formData) {
      const cartData = {};
      const cartInputs = CartForm.getFormInput(formData);

      try {
        if (cartInputs.inputs.analytics) {
          const dataInForm = JSON.parse(String(cartInputs.inputs.analytics));
          Object.assign(cartData, dataInForm);
        }
      } catch {
        // do nothing
      }

      if (Object.keys(cartData).length && fetcherData) {
        const addToCartPayload = {
          ...getClientBrowserParameters(),
          ...pageAnalytics,
          ...cartData,
          cartId: fetcherData.cart.id,
        };

        sendShopifyAnalytics({
          eventName: AnalyticsEventName.ADD_TO_CART,
          payload: addToCartPayload,
        });
      }
    }
  }, [fetcherData, formData, pageAnalytics]);
  return <>{children}</>;
}
