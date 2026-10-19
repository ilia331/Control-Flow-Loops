function parseDate(s) {
  const [d, m, y] = s.split("-"),
    months = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
  return new Date(+y, months[m], +d);
}
function hotelPrice(a, b) {
  const start = parseDate(a),
    end = parseDate(b),
    n = (end - start) / 86400000;
  if (!Number.isFinite(n) || n <= 0) return "Invalid period!";
  const month = start.getMonth(),
    season =
      month === 4 || month === 9
        ? "low"
        : month === 5 || month === 8
          ? "mid"
          : month === 6 || month === 7
            ? "high"
            : "out",
    studio = { low: 50, mid: 70, high: 80, out: 40 }[season],
    apt = { low: 65, mid: 80, high: 95, out: 55 }[season];
  let sd =
    n >= 14
      ? season === "high"
        ? 15
        : season === "mid"
          ? 20
          : 30
      : n >= 7
        ? 5
        : 0;
  let ad =
    n >= 14 ? 10 : n >= 7 && season !== "out" && season !== "high" ? 5 : 0;
  return `${n} nights\nStudio price: ${(n * studio * (1 - sd / 100)).toFixed(2)}\nApartment price: ${(n * apt * (1 - ad / 100)).toFixed(2)}`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = hotelPrice(start.value, end.value);
});
