function happyNumbers(n) {
  let out = [];
  for (let a = 1; a <= 9; a++)
    for (let b = 0; b <= 9; b++)
      for (let c = 0; c <= 9; c++)
        for (let d = 0; d <= 9; d++)
          if (a + b === n && c + d === n) out.push(`${a}${b}${c}${d}`);
  return out.join(" ");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = happyNumbers(+n.value);
});
