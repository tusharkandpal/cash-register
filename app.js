const billAmountRef = document.querySelector("#bill-amount");
const cashAmountRef = document.querySelector("#cash-amount");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-msg");
const notesRow = document.querySelectorAll(".notes-row");

const notes = [2000, 500, 100, 20, 10, 5, 1];

const checkAndCalculate = () => {
  notesRow.innerHTML = "<th>Notes</th>";
  let billAmount = Number(billAmountRef.value);
  let cashAmount = Number(cashAmountRef.value);

  if (isNaN(billAmount) || isNaN(cashAmount))
  {
    errorMsg.innerText = "*please enter a valid amount";
  }
  else if (billAmount <= 0) {
    errorMsg.innerText = "*the bill amount should atleast be greater than 0";
  } else if (cashAmount <= 0) {
    errorMsg.innerText = "*the cash amount should atleast be greater than 0";
  } else if (billAmount > cashAmount) {
    errorMsg.innerText = "*the bill amount exceeds the cash given";
  } else {
    errorMsg.innerText = "";
    let returnCash = cashAmount - billAmount;

    for (let i = 0; i < notes.length; i++) {
      let noOfNotes = Math.floor(returnCash / notes[i]);
      returnCash = returnCash % notes[i];
      notesRow[i].innerText = noOfNotes;
    }
  }
};

checkBtn.addEventListener("click", checkAndCalculate);
