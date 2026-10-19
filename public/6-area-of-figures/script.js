function figureArea(f, a, b) {
  let area;
  if (f === "square") area = a * a;
  else if (f === "rectangle") area = a * b;
  else if (f === "circle") area = Math.PI * a * a;
  else return "Invalid figure!";
  return `${f} area = ${area.toFixed(2)}`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = figureArea(figure.value, +d1.value, +d2.value);
});
