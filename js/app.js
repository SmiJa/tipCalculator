const billAmount = document.getElementById('amount');
const tipBox = document.getElementById('tip-box');
const totalBox = document.getElementById('total-box');
const percent15 = document.getElementById('percent15');
const percent18 = document.getElementById('percent18');
const percent20 = document.getElementById('percent20');
const percent15Value = percent15.value;
const percent18Value = percent18.value;
const percent20Value = percent20.value;
let billValue;
let tipAmount = 0.00;
let totalAmount = 0.00;

tipBox.innerText = `$${tipAmount.toFixed(2)}`;
totalBox.innerText = `$${totalAmount.toFixed(2)}`;


const getTipAndTotal = (tippercent) => {
    billValue = parseFloat(billAmount.value);
    tipAmount = billValue * tippercent;
    totalAmount = billValue + tipAmount;
    tipBox.innerText = `$${tipAmount.toFixed(2)}`;
    totalBox.innerText = `$${totalAmount.toFixed(2)}`;
}

percent15.addEventListener('change', () => getTipAndTotal(percent15Value));

percent18.addEventListener('change', () => getTipAndTotal(percent18Value));

percent20.addEventListener('change', () => getTipAndTotal(percent20Value));
