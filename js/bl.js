let blRecords = JSON.parse(localStorage.getItem("blRecords")) || [];

let editingBL = -1;

function openBLModal(){
document.getElementById("blModal").style.display="flex";
}

function closeBLModal(){

document.getElementById("blModal").style.display="none";

document.getElementById("blNumber").value="";
document.getElementById("blVessel").value="";
document.getElementById("blCustomer").value="";
document.getElementById("blShippingLine").value="";
document.getElementById("blCargo").value="";
document.getElementById("blETA").value="";
document.getElementById("blContainers").value="";

editingBL=-1;

}

function saveBL(){

const record={

bl:document.getElementById("blNumber").value,

vessel:document.getElementById("blVessel").value,

customer:document.getElementById("blCustomer").value,

shipping:document.getElementById("blShippingLine").value,

cargo:document.getElementById("blCargo").value,

eta:document.getElementById("blETA").value,

containers:document.getElementById("blContainers").value

};

if(record.bl=="") return;

if(editingBL==-1){

blRecords.push(record);

}else{

blRecords[editingBL]=record;

}

localStorage.setItem("blRecords",JSON.stringify(blRecords));

closeBLModal();

loadBL();

}

function loadBL(){

const tbody=document.getElementById("blTableBody");

if(!tbody) return;

tbody.innerHTML="";

blRecords.forEach((r,index)=>{

tbody.innerHTML+=`

<tr>

<td>${r.bl}</td>

<td>${r.vessel}</td>

<td>${r.customer}</td>

<td>${r.shipping}</td>

<td>${r.cargo}</td>

<td>${r.eta}</td>

<td>${r.containers}</td>

<td>

<button onclick="editBL(${index})">✏️</button>

<button onclick="deleteBL(${index})">🗑️</button>

</td>

</tr>

`;

});

}

function editBL(index){

editingBL=index;

const r=blRecords[index];

document.getElementById("blNumber").value=r.bl;
document.getElementById("blVessel").value=r.vessel;
document.getElementById("blCustomer").value=r.customer;
document.getElementById("blShippingLine").value=r.shipping;
document.getElementById("blCargo").value=r.cargo;
document.getElementById("blETA").value=r.eta;
document.getElementById("blContainers").value=r.containers;

openBLModal();

}

function deleteBL(index){

if(confirm("Delete this BL?")){

blRecords.splice(index,1);

localStorage.setItem("blRecords",JSON.stringify(blRecords));

loadBL();

}

}

function searchBL(){

let value=document.getElementById("searchBL").value.toLowerCase();

let rows=document.querySelectorAll("#blTableBody tr");

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)?"":"none";

});

}

loadBL();
