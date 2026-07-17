function updateClock() {

const now = new Date();

const options = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
};

document.getElementById("currentDate").innerHTML =
now.toLocaleDateString("en-GB", options);

document.getElementById("currentTime").innerHTML =
now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function openVesselForm(){

document.getElementById("vesselForm").style.display="flex";

}

function saveVessel(){

alert("Vessel Registered Successfully!");

document.getElementById("vesselForm").style.display="none";

}
