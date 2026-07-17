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

let vessel=document.getElementById("vesselName").value.trim();
let line=document.getElementById("shippingLine").value.trim();
let eta=document.getElementById("eta").value;
let ata=document.getElementById("ata").value;
let cargo=document.getElementById("cargo").value;

if(vessel==""||line==""||eta==""||ata==""){
alert("Fill all fields");
return;
}

let vesselData={vessel,line,eta,ata,cargo};

let vessels=JSON.parse(localStorage.getItem("vessels"))||[];

vessels.push(vesselData);

localStorage.setItem("vessels",JSON.stringify(vessels));

location.reload();

}

let table=document.getElementById("vesselTableBody");

let row=table.insertRow();

row.innerHTML=`
<td>${vessel}</td>
<td>${line}</td>
<td>${eta}</td>
<td>${ata}</td>
<td>${cargo}</td>
<td><span class="badge green">Active</span></td>
<td><button onclick="deleteRow(this)">🗑️</button></td>
`;

closeVesselForm();

document.getElementById("vesselName").value="";
document.getElementById("shippingLine").value="";
document.getElementById("eta").value="";
document.getElementById("ata").value="";

}{

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

}function deleteRow(btn){

if(confirm("Delete this vessel?")){

btn.parentElement.parentElement.remove();

}


}
function searchVessel(){

let input=document.getElementById("searchVessel").value.toUpperCase();

let table=document.getElementById("vesselTableBody");

let tr=table.getElementsByTagName("tr");

for(let i=0;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent||td.innerText;

tr[i].style.display=txt.toUpperCase().indexOf(input)>-1?"":"none";

}

}

}
window.onload=function(){

if(document.getElementById("vesselTableBody")){

let vessels=JSON.parse(localStorage.getItem("vessels"))||[];

let table=document.getElementById("vesselTableBody");

vessels.forEach(v=>{

let row=table.insertRow();

row.innerHTML=`
<td>${v.vessel}</td>
<td>${v.line}</td>
<td>${v.eta}</td>
<td>${v.ata}</td>
<td>${v.cargo}</td>
<td><span class="badge green">Active</span></td>
<td><button onclick="deleteRow(this)">🗑️</button></td>
`;

});

}

}
