const getCryptos = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets';
  const response = await fetch(API_URL);
  const { data } = await response.json();
  console.log(insertDataCrypto(data)); 
};

const insertDataCrypto = (data) => {
  const { symbol, name, supply } = data;
  const formatSupply = parseInt(supply).toFixed(4);
  const imprimeData = data.map(() => `${name} (${symbol}): ${formatSupply}.`)
  return imprimeData
}

getCryptos()