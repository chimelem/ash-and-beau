export default function fCurrency(number, currency) {
  const amount = parseInt(number, 10)

  switch (currency) {
    case "USD":
      return amount.toLocaleString('us-US', { style: 'currency', currency: 'USD' })

    case "EUR":
      return amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    case "JPY":
      return amount.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })

    case "NGN":
      return amount.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })

    default:
      return amount.toLocaleString('us-US', { style: 'currency', currency: currency })
  }
}