document.getElementById("btn-cashout").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");

//   const balanceAmount = document.getElementById("balance");
//   const balance = balanceAmount.innerText;
const currentBalance = getBalance() ;

  const newBalance = currentBalance - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Insufficient Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");

  if (pin === "1234") {
    alert("cashout successfull");
    // console.log('new balance : ',newBalance);
    // document.getElementById('balance').innerText = newBalance;
    setBalance(newBalance);
  } else {
    alert("invalid pin");
    return;
  }
});

// document.getElementById("btn-cashout").addEventListener("click",function(){
//     // console.log("HEllo ")
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value ;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Agent Number");
//         return ;
//     }
//     const cashoutAmountInput = document.getElementById('cashout-amount');

//     const cashoutAmount = cashoutAmountInput.value ;
//     // console.log(cashoutAmount);

//     const balanceAmount = document.getElementById('balance');
//     const balance = balanceAmount.innerText ;

//     // console.log(balance);
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if(newBalance < 0){
//         alert("Insufficient Amount");
//         return ;
//     }

//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value ;
//     if(pin === '1234'){
//         alert("cashout successfull");
//         // console.log('new balance : ',newBalance);
//         balanceAmount.innerText = newBalance;
//     }else{
//         alert('invalid pin');
//         return ;
//     }

// });
