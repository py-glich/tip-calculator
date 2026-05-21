const billInput = document.getElementById("bill");

const peopleInput = document.getElementById("people");

const customTipInput =
  document.getElementById("custom-tip");

const tipButtons =
  document.querySelectorAll(".tip-btn");

const tipAmountText =
  document.getElementById("tip-amount");

const grandTotalText =
  document.getElementById("grand-total");

const perPersonText =
  document.getElementById("per-person");

const billError =
  document.getElementById("bill-error");

const tipError =
  document.getElementById("tip-error");

const peopleError =
  document.getElementById("people-error");

const resetBtn =
  document.getElementById("reset-btn");

let selectedTip = 10;
function calculate() {

  const bill =
    Number(billInput.value);

  const people =
    Number(peopleInput.value);

  billError.textContent = "";
  tipError.textContent = "";
  peopleError.textContent = "";

  if (billInput.value !== "" && bill <= 0) {
    billError.textContent =
      "Bill must be greater than 0";
  }

  if (selectedTip < 0 || selectedTip > 100) {
    tipError.textContent =
      "Tip must be between 0 and 100";
  }

  if (people < 1 || !Number.isInteger(people)) {
    peopleError.textContent =
      "People must be at least 1";
  }

  const tipAmount =
    (bill * selectedTip) / 100;

  const grandTotal =
    bill + tipAmount;

  const perPerson =
    people > 0
      ? grandTotal / people
      : 0;

  tipAmountText.textContent =
    `Rs ${tipAmount.toFixed(2)}`;

  grandTotalText.textContent =
    `Rs ${grandTotal.toFixed(2)}`;

  perPersonText.textContent =
    `Rs ${perPerson.toFixed(2)}`;
}
billInput.addEventListener(
  "input",
  calculate
);

peopleInput.addEventListener(
  "input",
  calculate
);

customTipInput.addEventListener(
  "input",
  function () {

    selectedTip =
      Number(customTipInput.value);

    tipButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    calculate();
  }
);
tipButtons.forEach(button => {

  button.addEventListener(
    "click",
    function () {

      tipButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      selectedTip =
        Number(button.textContent.replace("%", ""));

      customTipInput.value = "";

      calculate();
    }
  );
});
resetBtn.addEventListener(
  "click",
  function () {

    billInput.value = "";

    peopleInput.value = 1;

    customTipInput.value = "";

    selectedTip = 10;

    tipButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    tipButtons[0].classList.add("active");

    calculate();
  }
);
calculate();