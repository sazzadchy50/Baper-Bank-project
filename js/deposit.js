document.getElementById('deposit-btn').addEventListener('click' , function(){
   
    const depositField = document.getElementById('deposit-amount');            
    const newDeposit =parseFloat(depositField.value);

    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = parseFloat(depositTotal.innerText);
   
    // depositTotal.innerText = newDeposit;
    const currentDepositTotal = previousDeposit + newDeposit;
    
    depositField.value = '';
    if(isNaN(newDeposit)){
        alert('Please provide valid amount');
        return;
    }
    depositTotal.innerText = currentDepositTotal;
    const balanceField =document.getElementById('balance-amount')
    const previousBalanceTotal = parseFloat(balanceField.innerText)

    const newBalanceTotal = previousBalanceTotal + newDeposit;
    
   
    balanceField.innerText = newBalanceTotal;
})