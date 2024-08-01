// //src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/60.png
const contain = document.getElementById("container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

function getRandomInt(min, max) {
    return Math.floor(Math.random() *(max - min + 1) + min); // => 61
}
const randomSet = new Set();
let i=0;
while(i<60)
{
    const randomNumber = getRandomInt(1, 60);
    
    // nếu Set() chưa có randomNumber
    if (!randomSet.has(randomNumber))
    {
         randomSet.add(randomNumber);  //thêm randomNumber vào Set()
         i++;  //tăng stt img

    const newDiv = document.createElement("div");
    const parentDiv = contain.appendChild(newDiv);
    
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${randomNumber}.png`;
    parentDiv.appendChild(newImg);

    const newSpan = document.createElement("span");
    newSpan.innerText = `${i}`
    parentDiv.prepend(newSpan);
    }
}
console.log(contain);
