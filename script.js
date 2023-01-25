//code to generate the keypad
const keypad = document.querySelector(".keypad")
const keyValues=["%","CE","C","<","1/x","x2","Sqrt(x)","/","7","8","9","X","4","5","6","-","1","2","3","+","+/-","0",".","="]
for(i=0;i<24;i++){
        const key = document.createElement("div")
        key.style.backgroundColor="grey"
        key.style.color="white"
        key.style.textAlign="center"
        key.style.lineHeight="60px"
        key.innerHTML=keyValues[i]
        key.addEventListener("mouseenter",()=>{
            key.style.backgroundColor="black"
        })
        key.addEventListener("mouseleave",()=>{
            key.style.backgroundColor="grey"
        })
        keypad.appendChild(key);
    }
//functions to handle the operations
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function divide(x,y){
    return x/y;
}
function multiply(x,y){
    return x*y;
}
function add(x,y){
    return x+y;
}
function sqrt(x){
    return Math.sqrt(x);
}
function sqr(x){
    return x*x;
}
function inverse(x){
    return 1/x;
}
function percent(x){
    return x/100;
}
function negative(x){
    return x*-1;
}

function operate() {

}