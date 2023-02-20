document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // for input field usr .value to the value inside the input field

  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value; // by default input theke man nile string type hoye thake
  const newDepositAmount = parseFloat(newDepositAmountString);
  // console.log(typeof newDepositAmount);
  // step-3: get the current deposit total
  // for non-input field (element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //   console.log(typeof previousDepositTotal);

  // step-4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal; //this is not the proper way

  // step-5: get balance current total amount
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
  // step-7: clear the deposit field
  depositField.value = "";
});
