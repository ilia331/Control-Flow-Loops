function stupidPasswords(n) {
  let out = [];
  for (let a = 2; a <= n; a += 2)
    for (let b = 1; b <= n; b += 2) out.push(`${a}${b}${a * b}`);
  return out.join(" ");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = stupidPasswords(+n.value);
});
