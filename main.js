//src: https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
const contain = document.getElementById("container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

for( let i=1; i<61; i++)
{
    const newDiv = document.createElement("div");
    const parentDiv = contain.appendChild(newDiv);
    
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    parentDiv.appendChild(newImg);

    const newSpan = document.createElement("span");
    newSpan.innerText = `${i}`
    parentDiv.prepend(newSpan);
}
console.log(contain);