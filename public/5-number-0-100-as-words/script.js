const ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
  teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
function numToWords(n) {
  if (!Number.isInteger(n) || n < 0 || n > 100) return ">> out of range <<";
  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100)
    return tens[Math.floor(n / 10)] + (n % 10 ? "-" + ones[n % 10] : "");
  return "one hundred";
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = numToWords(+n.value);
});
