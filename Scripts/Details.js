const detailsForm = document.getElementById("detailsForm");
const continueBtn = document.getElementById("continueBtn");

// Function to enable the "Continue with purchase" button if all necessary information is provided
function checkCompletion() {
    const fullName = detailsForm.fullName.value;
    const mobileNumber = detailsForm.mobileNumber.value;
    const email = detailsForm.email.value;
    const confirmEmail = detailsForm.confirmEmail.value;

    // Check if all required fields are filled and if the emails match
    if (fullName && mobileNumber && email && confirmEmail && email === confirmEmail) {
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }
}


function updateTableWithData() {
    const dateVal = localStorage.getItem("selectedDate");
    document.getElementById("dateVal").innerText = dateVal;
}



// Call checkCompletion() on form input change
detailsForm.addEventListener("input", checkCompletion);
// Call checkCompletion() on page load in case of saved data
window.addEventListener("load", checkCompletion);

function saveFormData() {
    localStorage.setItem("fullName", detailsForm.fullName.value);
    localStorage.setItem("mobileNumber", detailsForm.mobileNumber.value);
    localStorage.setItem("email", detailsForm.email.value);
    localStorage.setItem("confirmEmail", detailsForm.confirmEmail.value);
    localStorage.setItem("gender", detailsForm.gender.value);
}

// Function to load form data from local storage
function loadFormData() {
    detailsForm.fullName.value = localStorage.getItem("fullName") || "";
    detailsForm.mobileNumber.value = localStorage.getItem("mobileNumber") || "";
    detailsForm.email.value = localStorage.getItem("email") || "";
    detailsForm.confirmEmail.value = localStorage.getItem("confirmEmail") || "";
    detailsForm.gender.value = localStorage.getItem("gender") || "";
}

//Call loadFormData() on page load to populate form fields if data is available in local storage
window.addEventListener("load", loadFormData);

//Event listener for form submission
detailsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    saveFormData();
});

function updateTableWithData() {
    const dateVal = localStorage.getItem("selectedDate");
    const timeVal = localStorage.getItem("selectedSlots");
    const duration = localStorage.getItem("duration");
    const timeval = localStorage.getItem("timeval");
    const slAdultPrice = localStorage.getItem("slAdultPrice");
    const slChildPrice = localStorage.getItem("slChildPrice");
    const foreignAdultPrice = localStorage.getItem("foreignAdultPrice");
    const foreignChildPrice = localStorage.getItem("foreignChildPrice");
    const TotalPrice = localStorage.getItem("TotalPrice");

    //Updating the table elements with retrieved data
    document.getElementById("dateVal").innerText = dateVal;
    document.getElementById("timeVal").innerText = timeVal;
    document.getElementById("duration").innerText = duration;
    document.getElementById("slAdultPrice").innerText = slAdultPrice;
    document.getElementById("slChildPrice").innerText = slChildPrice;
    document.getElementById("foreignAdultPrice").innerText = foreignAdultPrice;
    document.getElementById("foreignChildPrice").innerText = foreignChildPrice;
    document.getElementById("TotalPrice").innerText = TotalPrice;
}

//Calling the function on page load
window.addEventListener("load", updateTableWithData);