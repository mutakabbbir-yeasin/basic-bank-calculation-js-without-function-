// step-1: set the event handler with withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2: get the withdraw field value
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawFieldAmountString = withdrawField.value;
  const newWithdrawFieldAmount = parseFloat(newWithdrawFieldAmountString);

  // step-10: clear the withdraw field
  withdrawField.value = "";

  if (isNaN(newWithdrawFieldAmount)) {
    alert("Please enter a number");
    return;
  }

  // step-3: get the total withdraw amount
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  // step=4: set the amount in withdraw

  // step-7: get the previous balance
  const previousBalance = document.getElementById("balance-total");
  const previousBalanceAmountString = previousBalance.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceAmountString);

  if (newWithdrawFieldAmount > previousBalanceAmount) {
    alert("baap er hotel a eto taka nai!!");
    return;
  }

  // step-5: add the previous amount and new amount
  const withdrawTotal = previousWithdrawTotal + newWithdrawFieldAmount;
  // step-6: now set the total withdraw amount in withdraw
  withdrawTotalElement.innerText = withdrawTotal;

  // step-8: subtruct the current withdraw from balance
  const totalBalance = previousBalanceAmount - newWithdrawFieldAmount;
  // step-9: set the current value
  previousBalance.innerText = totalBalance;
});
