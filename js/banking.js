// banking deposite button handler
// deposite and total balance
document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeInputField = document.getElementById("deposite-input");
  const newDepositeAmount = depositeInputField.value;

  // add amount to view in deposite

  //update deposite total

  const depositeTotal = document.getElementById("deposite-money");
  const previousDepositeAmount = depositeTotal.innerText;
  const newDepositeTotal =
    parseFloat(previousDepositeAmount) + parseFloat(newDepositeAmount);

  depositeTotal.innerText = newDepositeTotal;
  depositeInputField.value = "";

  //update account balance

  const totalBalance = document.getElementById("total-balance");
  const previousTotalBalance = totalBalance.innerText;
  const updatedTotalBalance =
    parseFloat(previousTotalBalance) + parseFloat(newDepositeAmount);

  totalBalance.innerText = updatedTotalBalance;
});

// withdraw and reduce balance

document.getElementById("withdraw-btn").addEventListener("click", function () {
  //withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithDrawInputAmount = parseFloat(withdrawInputText)
    
    const totalWithdraw = document.getElementById('withdraw-money');
    const previousWithdrawtotal = parseFloat(totalWithdraw.innerText);
    //total withdraw calculation
    const newTotalWithdrawAmount = previousWithdrawtotal + newWithDrawInputAmount;

    totalWithdraw.innerText = newTotalWithdrawAmount;
    withdrawInput.value = ''

    // reducing from total balance

    const totalBalance = document.getElementById("total-balance");
    const previousTotalBalance = parseFloat(totalBalance.innerText);
    const decresedTotal = previousTotalBalance - newWithDrawInputAmount;

    totalBalance.innerText = decresedTotal;
    







});
