import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ExchangeRate {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('RUB');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=5d71a898b1604fb6a92e1a51b36e01c8`
        );
        const data = response.data as { rates: { [key: string]: number } };

        if (data && data.rates) {
          const rate = data.rates[toCurrency];
          if (rate !== undefined) {
            setResult(amount * rate);
          } else {
            console.error(`Exchange rate for ${toCurrency} not found.`);
          }
        } else {
          console.error('Invalid response data from the API:', data);
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>From Currency:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <p>Result: {result.toFixed(2)}</p>
    </div>
  );
};

export default CurrencyConverter;
