const button = document.querySelector("button");
const tip = document.querySelector(".tip");
const amount = document.querySelector(".table-amount");
const total = document.querySelector(".total");
console.log(button);
button.addEventListener("click", function() {
  const cost = document.querySelector("input");
  console.log(cost.value * 0.15);
  let tip_amount = (cost.value * 0.15).toFixed(2);
  let total_amount = (cost.value * 1.15).toFixed(2);
  amount.innerHTML = `<h3><u>$${cost.value}</u></h3>`;
  tip.innerHTML = `<h3><u>$${tip_amount}</u></h3>`;
  total.innerHTML = `<h3><u>$${total_amount}</u></h3>`;
})