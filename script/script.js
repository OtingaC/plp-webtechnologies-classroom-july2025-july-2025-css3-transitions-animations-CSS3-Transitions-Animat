// Function for the animation
const box = document.getElementById('box-two');

// Start the animation
function startAnimation() {
    box.classList.add('animate');
}

// Stop the animation
function stopAnimation() {
    box.classList.remove('animate');
}



// Function with parameters and return value
function multiplyByTwo(num) {
    let result = num * 2; // local variable
    return result;        // send the value back
}

// Using the function
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(12));

// Global vs local scope
let globalMessage = "I am global!"; // global variable

function showScopeExample() {
    let localMessage = "I am local!"; // local variable
    console.log(globalMessage);
    console.log(localMessage);
}

showScopeExample();
console.log(globalMessage);
// console.log(localMessage); // local not visible here
