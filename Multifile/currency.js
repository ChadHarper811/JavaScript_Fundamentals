// Currency Data -------------------------------------------------------------------

export const getCurrencyConversionData = async () => {
  const headers = new Headers();
  headers.append('access_key', 'b4cf58735baebc157e7d24a2b8bd3cc1');
  const options = {
    method: 'GET',
    redirect: 'follow',
    headers,
  };
  const response = await fetch('https://api.exchangeratesapi.io/v1/latest?access_key=b4cf58735baebc157e7d24a2b8bd3cc1', options);
  if (!response.ok) {
    throw new Error('Cannot fetch curreny data.');
  }
  return response.json();
};

export const getSalary = (amountUSD, currency, currencyData) => {
  const amount = (currency === 'USD') ? amountUSD : amountUSD * currencyData.rates[currency];
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });
  return formatter.format(amount);
};
