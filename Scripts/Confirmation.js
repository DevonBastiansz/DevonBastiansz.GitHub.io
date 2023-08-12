function updateTableWithData() {
    const name = localStorage.getItem("fullName");
    const tele = localStorage.getItem("mobileNumber");
    const email = localStorage.getItem("email");
    const dateVal = localStorage.getItem("selectedDate");
    const timeVal = localStorage.getItem("selectedSlots");
    const duration = localStorage.getItem("duration");
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
    document.getElementById("name").innerText = name;
    document.getElementById("tele").innerText = tele;
    document.getElementById("email").innerText = email;
}
updateTableWithData();