function sumDigits(n) {
  n = Math.abs(Math.trunc(n));
  let sum = 0;
  do {
    sum += n % 10;
    n = Math.floor(n / 10);
  } while (n);
  return sum;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = sumDigits(+n.value);
});
