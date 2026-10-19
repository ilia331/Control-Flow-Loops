function drinkPrice(drink, ...extras) {
  const prices = { coffee: 1, tea: 0.6, soda: 1.2 },
    extraPrices = { sugar: 0.4, creamer: 0.3 };
  if (!(drink in prices)) return "Invalid drink!";
  let total = prices[drink];
  for (const extra of extras.filter(Boolean)) {
    if (!(extra in extraPrices)) return "Invalid extra!";
    total += extraPrices[extra];
  }
  return `Final price: ${total.toFixed(2)}`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = drinkPrice(drink.value, x.value, y.value);
});
