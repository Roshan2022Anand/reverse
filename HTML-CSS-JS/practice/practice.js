const boxes = document.querySelectorAll('.boxes');


boxes.forEach((divEle)=>{
    let imgEle;
    divEle.addEventListener("mousemove", (point) => {
        imgEle = divEle.firstElementChild;
        imgEle.style.opacity = "1";
        imgEle.style.left = `${point.x-50}px`;
        imgEle.style.top = `${point.y-50}px`;
    })
    divEle.addEventListener("mouseleave", (point) => {
        imgEle.style.opacity = "0";
    })

})