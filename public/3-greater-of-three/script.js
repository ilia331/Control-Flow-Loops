function greaterNumber(a, b, c) {
  return Math.max(a, b, c);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = greaterNumber(+a.value, +b.value, +c.value);
});
