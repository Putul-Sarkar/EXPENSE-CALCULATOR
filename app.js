window.onload=function(){
    if(localStorage.getItem('income')){
        document.getElementById('income').value=localStorage.getItem('income');
    }

    if(localStorage.getItem('food')){
        document.getElementById('food').value=localStorage.getItem('food');
    }

    if(localStorage.getItem('rent')){
        document.getElementById('rent').value=localStorage.getItem('rent');
    }

    if(localStorage.getItem('transport')){
        document.getElementById('transport').value=localStorage.getItem('transport');
    }
}

function saveData(){
    localStorage.setItem('income', document.getElementById('income').value);
    localStorage.setItem('food', document.getElementById('food').value);
    localStorage.setItem('rent', document.getElementById('rent').value);
    localStorage.setItem('transport', document.getElementById('transport').value);

}

//EXPENSES........//
function calculateExpenses(){
    const income=parseFloat(document.getElementById('income').value);
    const food=parseFloat(document.getElementById('food').value);
    const rent=parseFloat(document.getElementById('rent').value);
    const transport=parseFloat(document.getElementById('transport').value);

    if(isNaN(income)||isNaN(food)||isNaN(rent)||isNaN(transport)){
alert("please enter valid number for income and expenses");
return;
    }

    if(income<0||food<0||rent<0||transport<0){
        alert (" please enter non negative number. ");
        return;
    }

    const totalExpenses=food+rent+transport;
    const balance=income-totalExpenses;

    document.getElementById('totalExpenses').textContent=totalExpenses;
    document.getElementById('balance').textContent=balance;

     // Save data to localStorage
     saveData();
}

//SAVINGS//

function calculateSaving(){
    const income=parseFloat(document.getElementById('income').value);
    const food=parseFloat(document.getElementById('food').value);
    const rent=parseFloat(document.getElementById('rent').value);
    const transport=parseFloat(document.getElementById('transport').value);
    const savePercentage = parseFloat(document.getElementById("savePercentage").value);

    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(transport) || isNaN(savePercentage)) {
        alert("Please enter valid numbers for income, expenses, and savings percentage.");
        return;
    }

    
    const totalExpenses=food+rent+transport;
    const balance=income-totalExpenses;
    const savingAmount=(savePercentage/100)*income;
    const remainingBalance=balance-savingAmount;

if(savingAmount>balance){
    alert('input amount is larger than your remaining balance');
    return;
}

document.getElementById('savingAmount').textContent=savingAmount;
document.getElementById('remainingBalance').textContent=remainingBalance;
saveData();
}







 
   