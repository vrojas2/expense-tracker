export const moneyFormatter = (num) => {
  let p = num.toFixed(2).split(".");
  return (
    "$" +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + acc;
      }, "") +
    "." +
    p[1]
  );
}