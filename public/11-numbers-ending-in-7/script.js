function numbersEndingIn7(n) {
  let out = [];
  for (let i = 7; i <= n; i += 10) out.push(i);
  return out.join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = numbersEndingIn7(+n.value);
});
