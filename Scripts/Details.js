//Retrieving the details form elements
const detailsForm = document.getElementById("detailsForm");

//Retrieving the continue button
const continueBtn = document.getElementById("continueBtn");

function updateTableWithData() {
    const dateVal = localStorage.getItem("selectedDate");
    document.getElementById("dateVal").innerText = dateVal;
}

function checkCompletion() {
    const fullName = detailsForm.fullName.value;
    const mobileNumber = detailsForm.mobileNumber.value;
    const email = detailsForm.email.value;
    const confirmEmail = detailsForm.confirmEmail.value;

//Activating the Proceed to checkout button if every field is filled
    if (fullName && mobileNumber && email && confirmEmail && email === confirmEmail) {
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }
}

// Call checkCompletion() on form input change
detailsForm.addEventListener("input", checkCompletion);
// Call checkCompletion() on page load in case of saved data
window.addEventListener("load", checkCompletion);

//Setting the form data to local storage
function saveFormData() {
    localStorage.setItem("fullName", detailsForm.fullName.value);
    localStorage.setItem("mobileNumber", detailsForm.mobileNumber.value);
    localStorage.setItem("email", detailsForm.email.value);
    localStorage.setItem("confirmEmail", detailsForm.confirmEmail.value);
    localStorage.setItem("gender", detailsForm.gender.value);
}

//Loading form data from local storage
function loadFormData() {
    detailsForm.fullName.value = localStorage.getItem("fullName") || "";
    detailsForm.mobileNumber.value = localStorage.getItem("mobileNumber") || "";
    detailsForm.email.value = localStorage.getItem("email") || "";
    detailsForm.confirmEmail.value = localStorage.getItem("confirmEmail") || "";
    detailsForm.gender.value = localStorage.getItem("gender") || "";
}

window.addEventListener("load", loadFormData);

detailsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    saveFormData();
});

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

    //Updating the table elements with retrieved data
    document.getElementById("dateVal").innerText = dateVal;
    document.getElementById("timeVal").innerText = timeVal;
    document.getElementById("duration").innerText = duration;
    document.getElementById("LocalAdultPrice").innerText = LocalAdultPrice;
    document.getElementById("LocalChildPrice").innerText = LocalChildPrice;
    document.getElementById("foreignAdultPrice").innerText = foreignAdultPrice;
    document.getElementById("foreignChildPrice").innerText = foreignChildPrice;
    document.getElementById("TotalPrice").innerText = TotalPrice;
}

//Calling the function on page load
window.addEventListener("load", updateTableWithData);
