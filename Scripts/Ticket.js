window.onload = function () {
  localStorage.clear();
};

//DatePicker
const datePicker = document.getElementById('datePicker');
const dateVal = document.getElementById('dateVal');

function updateCell(selectedDate) {
  dateVal.textContent = selectedDate;
}
datePicker.addEventListener('change', function () {
  const selectedDate = this.value;
  updateCell(selectedDate);
});

const defaultDate = datePicker.value;
updateCell(defaultDate);
localStorage.setItem("selectedDate", datePicker.value);

window.addEventListener("load", function () {
  const selectedDate = localStorage.getItem("selectedDate");
  datePicker.value = selectedDate;
  updateCell(selectedDate);
});


//Consecutive slots
function handleSlotSelection(slot) {

  if (selectedSlots.includes(slot)) {
    return;
  } else {
    const currentSlotIndex = parseInt(slot.split("-")[0]);
    const firstSlotIndex =
      selectedSlots.length > 0
        ? parseInt(selectedSlots[0].split("-")[0])
        : -1;
    const lastSlotIndex =
      selectedSlots.length > 0
        ? parseInt(selectedSlots[selectedSlots.length - 1].split("-")[0])
        : -1;

    if (selectedSlots.length === 0) {
      selectedSlots.push(slot);
    } else if (selectedSlots.length === 1) {
      if (
        currentSlotIndex === firstSlotIndex + 1 ||
        currentSlotIndex === firstSlotIndex - 1
      ) {
        selectedSlots.push(slot);
      } else {
        selectedSlots = [slot];
      }
    } else {
      if (
        currentSlotIndex === lastSlotIndex + 1 ||
        currentSlotIndex === firstSlotIndex - 1
      ) {
        selectedSlots.push(slot);
      } else if (
        currentSlotIndex === firstSlotIndex + 1 ||
        currentSlotIndex === lastSlotIndex - 1
      ) {
        selectedSlots.unshift(slot);
      } else {
        selectedSlots = [slot];
      }
    }
  }

  updateButtons();
  document.getElementById("timeVal").innerHTML = selectedSlots;
  let duration = selectedSlots.length;
  localStorage.setItem("duration", duration);
  localStorage.setItem("selectedSlots", JSON.stringify(selectedSlots));
  document.getElementById("duration").innerHTML = duration;
  updateTotalPrice();
}

function updateButtons() {
  const buttons = document.getElementsByClassName("dateSelectButtons");
  for (const button of buttons) {
    const slot = button.textContent;
    if (selectedSlots.includes(slot)) {
      button.style.backgroundColor = "cornflowerblue";
    } else {
      button.style.backgroundColor = "";
    }
  }
}

let selectedSlots = [];
function resetSelection() {
  selectedSlots = [];
  updateButtons();
}

const buttons = document.getElementsByClassName("dateSelectButtons");
for (const button of buttons) {
  button.addEventListener("click", function () {
    const slot = button.textContent;
    handleSlotSelection(slot);
  });
}

//Price calculation for peak hours
function calPrice(peakPrice, offPeakPrice, units) {
  let totalPrice = 0;
  for (i = 0; i < selectedSlots.length; i++) {
    if (
      selectedSlots[i] == "10.00-11.00" ||
      selectedSlots[i] == "11.00-12.00" ||
      selectedSlots[i] == "12.00-13.00" ||
      selectedSlots[i] == "15.00-16.00" ||
      selectedSlots[i] == "16.00-17.00" ||
      selectedSlots[i] == "17.00-18.00"
    ) {
      var unitPrice = peakPrice;
    } else {
      var unitPrice = offPeakPrice;
    }
    totalPrice = totalPrice + unitPrice * units;
  }
  return totalPrice;
}

//Total price
function updateTotalPrice() {
  let adults = localStorage.getItem("LocalAdult");
  let children = localStorage.getItem("LocalChild");
  let foreignAdults = localStorage.getItem("ForeignAdult");
  let foreignChildren = localStorage.getItem("ForeignChild");

  let LocalAdultPrice = calPrice(6, 4, adults);
  localStorage.setItem("LocalAdultPrice", LocalAdultPrice);

  let LocalChildPrice = calPrice(3, 2, children);
  localStorage.setItem("LocalChildPrice", LocalChildPrice);

  let foreignAdultPrice = calPrice(13, 10, foreignAdults);
  localStorage.setItem("foreignAdultPrice", foreignAdultPrice);

  let foreignChildPrice = calPrice(8, 5, foreignChildren);
  localStorage.setItem("foreignChildPrice", foreignChildPrice);

  let TotalPrice = LocalAdultPrice + LocalChildPrice + foreignAdultPrice + foreignChildPrice;
  localStorage.setItem("TotalPrice", TotalPrice);

  document.getElementById("LocalAdultPrice").innerText = LocalAdultPrice;
  document.getElementById("LocalChildPrice").innerText = LocalChildPrice;
  document.getElementById("foreignAdultPrice").innerText =foreignAdultPrice;
  document.getElementById("foreignChildPrice").innerText =foreignChildPrice;
  document.getElementById("TotalPrice").innerText = TotalPrice;
}

//Local Adult
function LocalAdult(click) {
  const LocalAdult = document.getElementById("LocalAdult");
  const sumvalue = parseInt(LocalAdult.innerText) + click;
  localStorage.setItem("LocalAdult", sumvalue);
  LocalAdult.innerText = sumvalue;

  if (sumvalue < 0) {
    LocalAdult.innerText = 0;
    localStorage.setItem("LocalAdult", 0);
  }
}

//Local Child
function LocalChild(click) {
  const LocalChild = document.getElementById("LocalChild");
  const sumvalue = parseInt(LocalChild.innerText) + click;
  localStorage.setItem("LocalChild", sumvalue);
  LocalChild.innerText = sumvalue;

  if (sumvalue < 0) {
    LocalChild.innerText = 0;
    localStorage.setItem("LocalChild", 0);
  }
}

//Foreign Child
function ForeignChild(click) {
  const ForeignChild = document.getElementById("ForeignChild");
  const sumvalue = parseInt(ForeignChild.innerText) + click;

  ForeignChild.innerText = sumvalue;
  localStorage.setItem("ForeignChild", sumvalue);

  if (sumvalue < 0) {
    ForeignChild.innerText = 0;
    localStorage.setItem("ForeignChild", 0);
  }
}

//Foreign Adult
function ForeignAdult(click) {
  const ForeignAdult = document.getElementById("ForeignAdult");
  const sumvalue = parseInt(ForeignAdult.innerText) + click;
  localStorage.setItem("ForeignAdult", sumvalue);
  ForeignAdult.innerText = sumvalue;

  if (sumvalue < 0) {
    ForeignAdult.innerText = 0;
    localStorage.setItem("ForeignAdult", 0);
  }
}

//Infant
function Infant(click) {
  const Infant = document.getElementById("Infant");
  const sumvalue = parseInt(Infant.innerText) + click;
  localStorage.setItem("Infant", sumvalue);
  Infant.innerText = sumvalue;

  if (sumvalue < 0) {
    Infant.innerText = 0;
    localStorage.setItem("Infant", 0);
  }
}
