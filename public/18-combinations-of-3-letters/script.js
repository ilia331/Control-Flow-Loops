function threeLettersCombinations(s, e, x) {
  let letters = [];
  for (let i = s.charCodeAt(0); i <= e.charCodeAt(0); i++) {
    const c = String.fromCharCode(i);
    if (c !== x) letters.push(c);
  }
  let out = [];
  for (const a of letters)
    for (const b of letters) for (const c of letters) out.push(a + b + c);
  return `Total count: ${out.length}\n${out.join(" ")}`;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = threeLettersCombinations(
    s.value,
    endLetter.value,
    x.value,
  );
});
