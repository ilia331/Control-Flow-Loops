function lettersInRange(a, b) {
  let out = [];
  for (let i = a.charCodeAt(0); i <= b.charCodeAt(0); i++)
    out.push(String.fromCharCode(i));
  return out.join(" ");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = lettersInRange(a.value, b.value);
});
