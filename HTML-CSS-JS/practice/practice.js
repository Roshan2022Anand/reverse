const box = document.getElementById("container");
let center;
box.addEventListener("mousemove", (point) => {
    const checkLeft = () => {
        if (center - point.x < 255) return center - point.x;
        else return 225;
    }
    const checkRight = () => {
        if (point.x-center > 255) return 225;
        else return point.x - center;
    }
    center = window.innerWidth / 2;
    if (point.x > center) box.style.backgroundColor = `rgb( ${checkRight()},225, ${checkRight()})`;
    else box.style.backgroundColor = `rgb(255, ${checkLeft()}, ${checkLeft()})`;
})

document.addEventListener("mousemove",()=>{
    
})