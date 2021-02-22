let dodger = document.querySelector('#dodger');
let game = document.querySelector('#game');
dodger.style.backgroundColor = "crimson";

const moveDodgerLeft = () => {
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

const moveDodgerRight = () => {
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums, 10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});