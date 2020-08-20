const box = document.getElementById("box");

const topLeft = document.getElementById("topLeft")//slider
const topRight = document.getElementById("topRight") 
const botLeft = document.getElementById("botLeft")
const botRight = document.getElementById("botRight")

const outpuTopLeft = document.getElementById("outputTopLeft");//output
const outputTopRight = document.getElementById("outputTopRight");//output
const outputBotLeft = document.getElementById("outputBotLeft");//output
const outputBotRight = document.getElementById("outputBotRight");//output

console.log(topLeft)
console.log(topLeft.value)

outputTopLeft.innerHTML = topLeft.value + ' %';
outputTopRight.innerHTML = topRight.value + ' %';
outputBotLeft.innerHTML = botLeft.value + ' %';
outputBotRight.innerHTML = botRight.value + ' %';


topLeft.oninput = function (){
    outpuTopLeft.innerHTML = this.value + ' %'    
    box.style.borderTopLeftRadius = topLeft.value + '%';
}


topRight.oninput = function (){
    outputTopRight.innerHTML = this.value + ' %'    
    box.style.borderTopRightRadius = topRight.value + '%';
}


botLeft.oninput = function (){
    outputBotLeft.innerHTML = this.value + ' %'    
    box.style.borderBottomLeftRadius = botLeft.value + '%';
}


botRight.oninput = function (){
    outputBotRight.innerHTML = this.value + ' %'    
    box.style.borderBottomRightRadius = botRight.value + '%';
}
