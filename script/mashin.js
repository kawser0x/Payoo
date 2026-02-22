// console.log("Mashin connected");

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value ;

    return value ;
}

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;

    return Number(balance) ;
}

function setBalance(value){
    const balanceElement = document.getElementById('balance');

    balanceElement.innerText = value ;
}

function showOnly(id){
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');

    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}