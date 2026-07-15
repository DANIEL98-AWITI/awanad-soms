function login(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    if(username==="admin" && password==="1234"){

        window.location.href="dashboard.html";

    }else{

        alert("Invalid Username or Password");

    }

}

function updateClock(){

    let now=new Date();

    document.getElementById("clock").innerHTML=now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();
