let vessels = JSON.parse(localStorage.getItem("vessels")) || [];

let editingIndex = -1;

function openVesselModal() {
    document.getElementById("vesselModal").style.display = "flex";
}

function closeVesselModal() {
    document.getElementById("vesselModal").style.display = "none";

    document.getElementById("vesselName").value = "";
    document.getElementById("shippingLine").value = "";
    document.getElementById("voyage").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("ata").value = "";
    document.getElementById("status").selectedIndex = 0;

    editingIndex = -1;
}

function saveVessel(){

const vessel={

name:document.getElementById("vesselName").value,

line:document.getElementById("shippingLine").value,

voyage:document.getElementById("voyage").value,

eta:document.getElementById("eta").value,

ata:document.getElementById("ata").value,

status:document.getElementById("status").value

};

if(vessel.name==="") return;

if(editingIndex==-1){

vessels.push(vessel);

}else{

vessels[editingIndex]=vessel;

}

localStorage.setItem("vessels",JSON.stringify(vessels));

closeVesselModal();

loadVessels();

}

function loadVessels(){

const tbody=document.getElementById("vesselTableBody");

if(!tbody) return;

tbody.innerHTML="";

vessels.forEach((v,index)=>{

let cls="expected";

if(v.status==="Arrived") cls="arrived";

if(v.status==="Discharging") cls="discharging";

if(v.status==="Completed") cls="completed";

tbody.innerHTML+=`

<tr>

<td>${v.name}</td>

<td>${v.line}</td>

<td>${v.voyage}</td>

<td>${v.eta}</td>

<td>${v.ata}</td>

<td><span class="badge ${cls}">${v.status}</span></td>

<td>

<button onclick="editVessel(${index})">✏️</button>

<button onclick="deleteVessel(${index})">🗑️</button>

</td>

</tr>

`;

});

}

function editVessel(index){

editingIndex=index;

const v=vessels[index];

document.getElementById("vesselName").value=v.name;

document.getElementById("shippingLine").value=v.line;

document.getElementById("voyage").value=v.voyage;

document.getElementById("eta").value=v.eta;

document.getElementById("ata").value=v.ata;

document.getElementById("status").value=v.status;

openVesselModal();

}

function deleteVessel(index){

if(confirm("Delete this vessel?")){

vessels.splice(index,1);

localStorage.setItem("vessels",JSON.stringify(vessels));

loadVessels();

}

}

function searchVessel(){

const value=document.getElementById("searchInput").value.toLowerCase();

const rows=document.querySelectorAll("#vesselTableBody tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)?"":"none";

});

}

loadVessels();
