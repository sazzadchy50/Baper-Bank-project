document
.getElementById("withdraw-btn")
.addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdraw = parseFloat(withdrawField.value);

  const withdrawTotal = document.getElementById("withdraw-amount");
  const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

  
  withdrawField.value = "";

  if(isNaN(newWithdraw)){
    alert("please provide valid amount");
    return;
  }
  const balanceTotal = document.getElementById("balance-amount");

  const previousBalanceTotal = parseFloat(balanceTotal.innerText);

  if (newWithdraw > previousBalanceTotal) {
    alert("Baper er bank a atto taka nai");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;

  withdrawTotal.innerText = currentWithdrawTotal;
  const newBalanceTotal = previousBalanceTotal - newWithdraw;
  balanceTotal.innerText = newBalanceTotal;

  console.log(typeof previousBalanceTotal);
});