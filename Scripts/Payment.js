function paymentForm() {
    const cardNumber = detailsForm.nameOnCard.value;
    const expiryDate = detailsForm.expiryDate.value;
    const cvc = detailsForm.cvc.value;
    const nameOnCard = detailsForm.nameOnCard.value;

    //Requiring all fields to be filled
    if (cardNumber && expiryDate && cvc && nameOnCard) {
        continueBtn.disabled = true;
    } else {
        continueBtn.disabled = false;
    }
}

//Updating the summary table with data
function updateTableWithData() {
    const dateVal = localStorage.getItem("selectedDate");
    const timeVal = localStorage.getItem("selectedSlots");
    const duration = localStorage.getItem("duration");
    const timeval = localStorage.getItem("timeval");
    const LocalAdultPrice = localStorage.getItem("LocalAdultPrice");
    const LocalChildPrice = localStorage.getItem("LocalChildPrice");
    const foreignAdultPrice = localStorage.getItem("foreignAdultPrice");
    const foreignChildPrice = localStorage.getItem("foreignChildPrice");
    const TotalPrice = localStorage.getItem("TotalPrice");

    // Updating the table elements with retrieved data
    document.getElementById("dateVal").innerText = dateVal;
    document.getElementById("timeVal").innerText = timeVal;
    document.getElementById("duration").innerText = duration;
    document.getElementById("LocalAdultPrice").innerText = LocalAdultPrice;
    document.getElementById("LocalChildPrice").innerText = LocalChildPrice;
    document.getElementById("foreignAdultPrice").innerText = foreignAdultPrice;
    document.getElementById("foreignChildPrice").innerText = foreignChildPrice;
    document.getElementById("TotalPrice").innerText = TotalPrice;
}

//Update the table on load
window.addEventListener("load", updateTableWithData);

const amount = localStorage.getItem("TotalPrice");

document.getElementById("amount").innerText = "$" + amount;
