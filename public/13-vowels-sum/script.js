function sumVowels(text) {
  const values = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let sum = 0;
  for (const char of text.toLowerCase()) sum += values[char] || 0;
  return sum;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = sumVowels(text.value);
});
