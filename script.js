const bill = document.getElementById("bill");
const people = document.getElementById("people");
const customTip = document.getElementById("customTip");

const tipButtons = document.querySelectorAll(".tip");

const tipAmountEl = document.getElementById("tipAmount");
const totalAmountEl = document.getElementById("totalAmount");
const perPersonEl = document.getElementById("perPerson");

const billError = document.getElementById("billError");
const tipError = document.getElementById("tipError");
const peopleError = document.getElementById("peopleError");

const resetBtn = document.getElementById("reset");

let tipValue = 10;

// CALCULATE FUNCTION
function calculate() {
  let billVal = Number(bill.value);
  let peopleVal = Number(people.value);

  // errors reset
  billError.textContent = "";
  tipError.textContent = "";
  peopleError.textContent = "";

  // validation
  if (billVal <= 0) {
    billError.textContent = "Bill must be greater than 0";
  }

  if (tipValue < 0 || tipValue > 100) {
    tipError.textContent = "Tip must be 0–100";
  }

  if (peopleVal < 1) {
    peopleError.textContent = "People must be at least 1";
  }

  if (!billVal || peopleVal < 1) {
    tipAmountEl.textContent = "Rs 0.00";
    totalAmountEl.textContent = "Rs 0.00";
    perPersonEl.textContent = "Rs 0.00";
    return;
  }

  const tipAmount = (billVal * tipValue) / 100;
  const total = billVal + tipAmount;
  const perPerson = total / peopleVal;

  tipAmountEl.textContent = `Rs ${tipAmount.toFixed(2)}`;
  totalAmountEl.textContent = `Rs ${total.toFixed(2)}`;
  perPersonEl.textContent = `Rs ${perPerson.toFixed(2)}`;
}

// EVENTS
bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);
customTip.addEventListener("input", () => {
  tipValue = Number(customTip.value) || 0;
  tipButtons.forEach(b => b.classList.remove("active"));
  calculate();
});

// TIP BUTTONS
tipButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tipButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tipValue = Number(btn.dataset.tip);
    customTip.value = "";
    calculate();
  });
});

// RESET
resetBtn.addEventListener("click", () => {
  bill.value = "";
  people.value = 1;
  customTip.value = "";
  tipValue = 10;

  tipButtons.forEach(b => b.classList.remove("active"));
  tipButtons[0].classList.add("active");

  calculate();
});

// INIT
calculate();