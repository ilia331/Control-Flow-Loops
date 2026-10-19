function printBuilding(floors, units) {
  let out = [];
  for (let floor = floors; floor >= 1; floor--) {
    const type = floor === floors ? "L" : floor % 2 ? "A" : "O";
    let row = [];
    for (let unit = 0; unit < units; unit++) row.push(`${type}${floor}${unit}`);
    out.push(row.join(" "));
  }
  return out.join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = printBuilding(+f.value, +u.value);
});
