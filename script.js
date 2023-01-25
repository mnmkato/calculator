//code to display the keypad
const keypad = document.querySelector(".keypad")
const keyValues=["CE","C","<","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="]

for(i=0;i<20;i++){
        const key = document.createElement("div")
        key.classList.add("key");
        key.innerHTML=keyValues[i]
        key.addEventListener("mouseenter",()=>{
            key.style.backgroundColor="black"
        })
        key.addEventListener("mouseleave",()=>{
            key.style.backgroundColor="grey"
        })
        
        key.addEventListener("click",()=>{
            handleClicks(key.innerText);
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
function negative(x){
    return x*-1;
}

function operate(x,y,operator) {
    switch(operator){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        case "+/-":
            return negative(x,y);
    }
}
const main_display = document.querySelector('.main_display');
const mini_display = document.querySelector('.mini_display');

function display(value,container){
    container.innerHTML=value;
}
let display_value="";
let mini_value="";
let operation=""

function handleClicks(text){
    if(text=="C"){
        display_value="";
        display(display_value,main_display);
        mini_value=""
        display(mini_value,mini_display)
    } else if(text=="CE"){
        mini_value=""
        display(mini_value,mini_display)
    } else if(text=="<"){
        display_value=display_value.slice(0,-1);
        display(display_value,main_display);
    } else if(text=="+/-"){
     
    } else if(text=="+"||text=="-"||text=="*"||text=="/"){
        if(display_value!=""){
            if(mini_value!=""){
               
                operand_1=parseInt(mini_value);
                operand_2=parseInt(display_value)

                display_value=operate(operand_1,operand_2,text)
                mini_value=display_value+text;

                display(mini_value,mini_display)
                display(display_value,main_display);
                
                
            } else {
                mini_value=mini_value+display_value+text;
                display(mini_value,mini_display)
                operation=text;
                display_value=""
            }
            display_value=""
        }
    } else if(text=="="){
        if(mini_value!=""&&display_value!=""){
            operand_1=parseInt(mini_value);
            operand_2=parseInt(display_value);

            mini_value=mini_value+display_value+text;
            display(mini_value,mini_display)

            display_value=operate(operand_1,operand_2,operation)
            display(display_value,main_display);
        }
       
    } else {
        display_value=display_value+text;
        display(display_value,main_display);
       
    }
}