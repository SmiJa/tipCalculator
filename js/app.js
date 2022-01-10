const billAmount = document.getElementById('amount');
const tipBox = document.getElementById('tip-box');
const totalBox = document.getElementById('total-box');
let percent15 = document.getElementById('percent15');
let percent18 = document.getElementById('percent18');
let percent20 = document.getElementById('percent20');
let billValue;
let percent = 0;
let tipAmount = 0.00;
let totalAmount = 0.00;

tipBox.innerText = `$${tipAmount.toFixed(2)}`;
totalBox.innerText = `$${totalAmount.toFixed(2)}`;

const calcTipAmount = (bill, tipPercent) => {
    return bill * tipPercent;
}

percent15.addEventListener('change', function() {
    billValue = parseFloat(billAmount.value);
    percent = 0.15;
    tipAmount = calcTipAmount(billValue, percent);
    totalAmount = billValue + tipAmount;
    tipBox.innerText = `$${tipAmount.toFixed(2)}`;
    totalBox.innerText = `$${totalAmount.toFixed(2)}`;
});

percent18.addEventListener('change', function() {
    billValue = parseFloat(billAmount.value);
    percent = 0.18;
    tipAmount = calcTipAmount(billValue, percent);
    totalAmount = billValue + tipAmount;
    tipBox.innerText = `$${tipAmount.toFixed(2)}`;
    totalBox.innerText = `$${totalAmount.toFixed(2)}`;
});

percent20.addEventListener('change', function() {
    billValue = parseFloat(billAmount.value);
    percent = 0.2;
    tipAmount = calcTipAmount(billValue, percent);
    totalAmount = billValue + tipAmount;
    tipBox.innerText = `$${tipAmount.toFixed(2)}`;
    totalBox.innerText = `$${totalAmount.toFixed(2)}`;
});
