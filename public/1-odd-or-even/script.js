function oddOrEven(number) {
  return number % 2 === 0 ? "even" : "odd";
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = oddOrEven(Number(n.value));
});
