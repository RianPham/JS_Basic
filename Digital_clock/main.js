function updateClock(){
    let now = new Date();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");

const time = `${hours}:${minutes}:${seconds}`;
// console.log(time);

document.querySelector("#clock").innerHTML = time;
}
setInterval(updateClock, 1000);