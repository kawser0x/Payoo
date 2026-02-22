document
  .getElementById("btn-add-amount")
  .addEventListener("click", function () {
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount);
    if (bankAccount === "Select Bank") {
      alert("please select a bank");
      return;
    }

    const accNo = getValueFromInput("bank-account-number");
    if (accNo.length != 11) {
      alert("invalid acc no");
      return;
    }

    const amount = getValueFromInput("add-amount");
    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput("bank-pin");
    if (pin === "1234") {
      alert(`Add Money Success from
${bankAccount}
at ${new Date()}`);
      setBalance(newBalance);
    } else {
      alert("invalid pin");
      return;
    }
  });
