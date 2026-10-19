function numToWords(n) {
  return (
    [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ][n] || "out of range"
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = numToWords(+n.value);
});
