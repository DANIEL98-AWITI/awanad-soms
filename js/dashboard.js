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
let editingRow=null;
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

let row;

if(editingRow){

row=editingRow;

editingRow=null;

}else{

row=table.insertRow();

}

row.innerHTML=`
<td>${vessel}</td>
<td>${line}</td>
<td>${eta}</td>
<td>${ata}</td>
<td>${cargo}</td>
<td><span class="badge green">Active</span></td>
<td>
<button onclick="editRow(this)">✏️</button>
<button onclick="deleteRow(this)">🗑️</button>
</td>
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
<td>
<button onclick="editRow(this)">✏️</button>
<td>
<button onclick="editContainer(this)">✏️</button>
<button onclick="deleteContainer(this)">🗑️</button>
</td>

<button onclick="deleteRow(this)">🗑️</button>
</td>
`;

});

loadContainers();}

}
function editRow editingRow=row;{

let row=btn.parentElement.parentElement;

document.getElementById("vesselName").value=row.cells[0].innerHTML;

document.getElementById("shippingLine").value=row.cells[1].innerHTML;

document.getElementById("eta").value=row.cells[2].innerHTML;

document.getElementById("ata").value=row.cells[3].innerHTML;

document.getElementById("cargo").value=row.cells[4].innerHTML;

row.remove();

openVesselForm();

}

function editRow(btn){

let row=btn.parentElement.parentElement;

document.getElementById("vesselName").value=row.cells[0].innerHTML;

document.getElementById("shippingLine").value=row.cells[1].innerHTML;

document.getElementById("eta").value=row.cells[2].innerHTML;

document.getElementById("ata").value=row.cells[3].innerHTML;

document.getElementById("cargo").value=row.cells[4].innerHTML;

row.remove();

openVesselForm();

}
function openContainerForm(){

document.getElementById("containerForm").style.display="flex";

}
let editingContainer=null;
function saveContainer(){

let number=document.getElementById("containerNo").value.trim();

let size=document.getElementById("containerSize").value;

let customer=document.getElementById("customerName").value.trim();

let line=document.getElementById("shippingLine").value.trim();

let yard=document.getElementById("yardLocation").value.trim();

let status=document.getElementById("containerStatus").value;

if(number==""||customer==""||line==""||yard==""){

alert("Fill all fields");

return;

}

let container={

number:number,

size:size,

customer:customer,

line:line,

yard:yard,

status:status

};

let containers=JSON.parse(localStorage.getItem("containers"))||[];

if(editingContainer){

containers=containers.filter(c=>c.number!==editingContainer);

editingContainer=null;

}

containers.push(container);

localStorage.setItem("containers",JSON.stringify(containers));

loadContainers();

document.getElementById("containerForm").style.display="none";

document.getElementById("containerNo").value="";
document.getElementById("customerName").value="";
document.getElementById("shippingLine").value="";
document.getElementById("yardLocation").value="";

}
let table=document.getElementById("containerTableBody");

let row=table.insertRow();

row.innerHTML=`
<td>${number}</td>
<td>${size}</td>
<td>${customer}</td>
<td>${line}</td>
<td>${yard}</td>
<td><span class="badge blue">${status}</span></td>
<td>
<button onclick="deleteRow(this)">🗑️</button>
</td>
`;

document.getElementById("containerForm").style.display="none";

}
function searchContainer(){

let input=document.getElementById("searchContainer").value.toUpperCase();

let table=document.getElementById("containerTableBody");

let tr=table.getElementsByTagName("tr");

for(let i=0;i<tr.length;i++){

let td=tr[i].getElementsByTagName("td")[0];

if(td){

let txt=td.textContent||td.innerText;

tr[i].style.display=txt.toUpperCase().indexOf(input)>-1?"":"none";

}

}

}
function loadContainers(){

let table=document.getElementById("containerTableBody");

if(!table) return;

table.innerHTML="";

let containers=JSON.parse(localStorage.getItem("containers"))||[];

containers.forEach(c=>{

let row=table.insertRow();

row.innerHTML=`
<td>${c.number}</td>
<td>${c.size}</td>
<td>${c.customer}</td>
<td>${c.line}</td>
<td>${c.yard}</td>
<td><span class="badge blue">${c.status}</span></td>
<td><button onclick="deleteContainer(this)">🗑️</button></td>
`;

});

}
function deleteContainer(btn){

if(confirm("Delete this container?")){

let row=btn.parentElement.parentElement;

let number=row.cells[0].innerText;

let containers=JSON.parse(localStorage.getItem("containers"))||[];

containers=containers.filter(c=>c.number!==number);

localStorage.setItem("containers",JSON.stringify(containers));

loadContainers();

}

}
function editContainer(btn){

let row=btn.parentElement.parentElement;

document.getElementById("containerNo").value=row.cells[0].innerText;

document.getElementById("containerSize").value=row.cells[1].innerText;

document.getElementById("customerName").value=row.cells[2].innerText;

document.getElementById("shippingLine").value=row.cells[3].innerText;

document.getElementById("yardLocation").value=row.cells[4].innerText;

document.getElementById("containerStatus").value=row.cells[5].innerText;

editingContainer=row.cells[0].innerText;

document.getElementById("containerForm").style.display="flex";

}
