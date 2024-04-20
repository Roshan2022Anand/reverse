const clickBtn = document.getElementById('click');
const checkBtn = document.getElementById('check');
const value = document.getElementById('value');
const peg1 = document.getElementById('peg-1');
const peg2 = document.getElementById('peg-2');
const peg3 = document.getElementById('peg-3');
let moves = [];
let count = 0;
//function to make the pattern for tower of hanoi
const toh = (n, a, b, c) => {
    if (n == 1) {
        moves.push([a, c]);
        return;
    }
    toh(n - 1, a, c, b);
    moves.push([a, c]);
    toh(n - 1, b, a, c);
}

//function to set the blocks
const setBlocks = (val) => {
    for (let i = 1; i <= val; i++) peg1.innerHTML += `<div id="block-${i}" class="block" style="width:${i * 2}vw;">${i}</div>`

}
//function to display all the movements of the blocks
const displayBlocks = (index) => {
    let block1 = eval(index[0]);
    let block2 = eval(index[1]);
    block1.querySelector("div").style.animation = 'moveBlock 2s';
    setTimeout(() => {
        block2.prepend(block1.querySelector("div"));
    }, 2000);
}
clickBtn.addEventListener("click", () => {
    let val = value.value;
    if (val > 10) return;
    if (val === '') console.log('Enter a number');
    else {
        document.querySelectorAll(".pegs").forEach((ele) => ele.innerHTML = "");
        moves = [];
        count = 0;
        toh(val, 'peg1', 'peg2', 'peg3');
        checkBtn.addEventListener("click", showMoves)
    }
    setBlocks(val);
})
//function to show the moves of the towers
function showMoves() {
    if (count + 1 > moves.length) checkBtn.removeEventListener("click", () => { });
    else {
        displayBlocks(moves[count]);
        checkBtn.removeEventListener("click", () => { });
    }
    count++;
}