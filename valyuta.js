const valyuta = [
    { nomi: "USD", narxi: 12750 },
    { nomi: "UZS", narxi: 1 },
    { nomi: "EURO", narxi: 13500 },
    { nomi: "RUBL", narxi: 150 },
    { nomi: "GBV", narxi: 15000 },
    { nomi: "CHF", narxi: 14000 },
    { nomi: "TENGE", narxi: 30 },
    { nomi: "YUANG", narxi: 2000 },
    { nomi: "RUPIYA", narxi: 90 },
    { nomi: "JPY", narxi: 100 },
  ];
  
   const currencySelect = document.getElementById("currency");
  
   valyuta.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.narxi;
    option.textContent = item.nomi;
    currencySelect.appendChild(option);
  });
  
   function convertCurrency() {
    const amount = document.getElementById("amount").value || 1;   
    const selectedCurrencyRate = document.getElementById("currency").value;   
    const resultElement = document.getElementById("result");
  
    if (selectedCurrencyRate) {
      const convertedAmount = amount * selectedCurrencyRate;   
      resultElement.textContent = `${convertedAmount.toFixed(2)} UZS`;  
    } else {
      resultElement.textContent = "0.00 UZS";
    }
  }
  
   document.getElementById("amount").addEventListener("input", convertCurrency);
  document.getElementById("currency").addEventListener("change", convertCurrency);
  