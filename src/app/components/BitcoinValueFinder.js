import React, { useEffect, useState } from "react";

const BitcoinValueFinder = ({ bitcoins }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );

    let newData = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
    let interval = setInterval(() => fetchData(), 5000);
    return () => clearInterval(interval);
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const getValue = () => {
    const price = bitcoins * data.bpi.USD.rate_float;
    return formatter.format(price);
  };

  const getCurrentBTCPrice = () => formatter.format(data.bpi.USD.rate_float);

  return (
    <section data-testid="value-finder">
      <p>{`Bitcoins ${bitcoins}`}</p>
      <p>{`Value ${data ? getValue() : formatter.format(0)}`}</p>
      <p>{`BTC/USD ${data ? getCurrentBTCPrice() : "fetching latest..."}`}</p>
    </section>
  );
};

export default BitcoinValueFinder;
