function numbersSum(n) {
  let parts = [],
    sum = 0;
  for (let i = 1; i <= n; i++) {
    parts.push(i);
    sum += i;
  }
  return `${parts.join(" + ")} = ${sum}`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = numbersSum(+n.value);
});
