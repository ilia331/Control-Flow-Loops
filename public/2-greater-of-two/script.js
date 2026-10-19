function greaterNumber(a, b) {
  return a > b ? a : b;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = greaterNumber(+a.value, +b.value);
});
