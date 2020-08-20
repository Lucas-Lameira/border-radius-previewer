const box = document.getElementById("box");
const styleView = document.getElementById("showStyle")
let copyCss

const topLeft = document.getElementById("topLeft")//slider
const topRight = document.getElementById("topRight") 
const botLeft = document.getElementById("botLeft")
const botRight = document.getElementById("botRight")

const outpuTopLeft = document.getElementById("outputTopLeft");//output
const outputTopRight = document.getElementById("outputTopRight");//output
const outputBotLeft = document.getElementById("outputBotLeft");//output
const outputBotRight = document.getElementById("outputBotRight");//output

outputTopLeft.innerHTML = topLeft.value + ' %';
outputTopRight.innerHTML = topRight.value + ' %';
outputBotLeft.innerHTML = botLeft.value + ' %';
outputBotRight.innerHTML = botRight.value + ' %';

topLeft.oninput = function (){
    outpuTopLeft.innerHTML = this.value + ' %'    
    box.style.borderTopLeftRadius = topLeft.value + '%';
    getStyle()   
}

topRight.oninput = function (){
    outputTopRight.innerHTML = this.value + ' %'    
    box.style.borderTopRightRadius = topRight.value + '%';
    getStyle()
}

botLeft.oninput = function (){
    outputBotLeft.innerHTML = this.value + ' %'    
    box.style.borderBottomLeftRadius = botLeft.value + '%';
    getStyle()
}

botRight.oninput = function (){
    outputBotRight.innerHTML = this.value + ' %'    
    box.style.borderBottomRightRadius = botRight.value + '%';
    getStyle()
}

function getStyle () {
    if(box.hasAttribute("style")){         
        styleView.innerHTML = box.getAttribute("style");        
    }
}

function copyCode() {
  copyCss = document.getElementById("copyInput");
  copyCss.setAttribute("value", styleView.innerHTML);
  copyCss.select();  
  document.execCommand("copy");
  alert("Copied the text: " + copyCss.value);
}