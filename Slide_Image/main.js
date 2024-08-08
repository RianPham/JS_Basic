// chọn tất cả các phần tử trong .panel
const panels = document.querySelectorAll('.panel');
//console.log(panels);
panels.forEach((item) => {
    //console.log(item);
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');
    });
});
function removeActive() {
    panels.forEach((item) => {
        item.classList.remove('active');
    })
}