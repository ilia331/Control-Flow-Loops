function triangle(n) {
  let out = [];
  for (let i = 1; i <= n; i++) out.push("*".repeat(i));
  return out.join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = triangle(+n.value);
});
