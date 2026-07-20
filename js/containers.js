let containers = JSON.parse(localStorage.getItem("containers")) || [];

function openContainerModal(){
document.getElementById("containerModal").style.display="flex";
}

function closeContainerModal(){
document.getElementById("containerModal").style.display="none";

document.getElementById("containerBL").value="";
document.getElementById("containerVessel").value="";
document.getElementById("containerCustomer").value="";
document.getElementById("containerShipping").value="";
document.getElementById("containerNumber").value="";
document.getElementById("containerStatus").selectedIndex=0;
}

function fetchBL(){

let bl=document.getElementById("containerBL").value.trim();

let records=JSON.parse(localStorage.getItem("blRecords"))||[];

let found=records.find(r=>r.bl===bl);

if(found){

document.getElementById("containerVessel").value=found.vessel;

document.getElementById("containerCustomer").value=found.customer;

document.getElementById("containerShipping").value=found.shipping;

}else{

document.getElementById("containerVessel").value="";

document.getElementById("containerCustomer").value="";

document.getElementById("containerShipping").value="";

}

}

function saveContainer(){

const item={

bl:document.getElementById("containerBL").value,

vessel:document.getElementById("containerVessel").value,

customer:document.getElementById("containerCustomer").value,

shipping:document.getElementById("containerShipping").value,

container:document.getElementById("containerNumber").value,

status:document.getElementById("containerStatus").value

};

if(item.bl==""||item.container=="") return;

containers.push(item);

localStorage.setItem("containers",JSON.stringify(containers));

closeContainerModal();

loadContainers();

}

function loadContainers(){

const tbody=document.getElementById("containerTableBody");

if(!tbody) return;

tbody.innerHTML="";

containers.forEach(c=>{

tbody.innerHTML+=`

<tr>

<td>${c.bl}</td>

<td>${c.vessel}</td>

<td>${c.customer}</td>

<td>${c.shipping}</td>

<td>${c.container}</td>

<td>${c.status}</td>

</tr>

`;

});

}

loadContainers();
