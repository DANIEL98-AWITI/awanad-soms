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
function closeVesselForm(){

document.getElementById("vesselForm").style.display="none";

}
document.getElementById("vesselForm").style.display="flex";

}

function saveVessel(){

let vessel=document.getElementById("vesselName").value;

let line=document.getElementById("shippingLine").value;

let eta=document.getElementById("eta").value;

let ata=document.getElementById("ata").value;

let cargo=document.getElementById("cargo").value;

let table=document.getElementById("vesselTableBody");

let row=table.insertRow();

row.innerHTML=`
<td>${vessel}</td>
<td>${line}</td>
<td>${eta}</td>
<td>${ata}</td>
<td>${cargo}</td>
<td><span class="badge green">Active</span></td>
<td>✏️ 🗑️</td>
`;

document.getElementById("vesselForm").style.display="none";

document.getElementById("vesselName").value="";
document.getElementById("shippingLine").value="";
document.getElementById("eta").value="";
document.getElementById("ata").value="";

}
