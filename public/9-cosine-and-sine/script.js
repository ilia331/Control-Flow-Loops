function printDegreesCosineSine(a, b) {
  let out = [];
  for (let d = a; d <= b; d++) {
    const r = (d * Math.PI) / 180;
    out.push(
      `${d} degrees: cos = ${Math.cos(r).toFixed(4)}, sin = ${Math.sin(r).toFixed(4)}`,
    );
  }
  return out.join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = printDegreesCosineSine(+a.value, +b.value);
});
