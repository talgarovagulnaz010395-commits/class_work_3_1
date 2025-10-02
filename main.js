const greenLight = document.querySelector(".traffic-light-green");
const redLight = document.querySelector(".traffic-light-red");
const blueLight = document.querySelector(".traffic-light-yellow");

const light = prompt("Enter the light");

if(light === "red") {
    redLight.style.backgroundColor = "red";
    document.getElementById("message-1").innerText = "STOP";
}else if(light === "yellow") {
    blueLight.style.backgroundColor = "yellow";
    document.getElementById("message-2").innerText = "WAIT";
}else if(light === "green") {
    greenLight.style.backgroundColor = "green";
    document.getElementById("message-3").innerText = "GO";
}else {
    alert("введите верный цвет светофора")
}