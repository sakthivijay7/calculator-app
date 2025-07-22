const display=document.getElementById("display");

function  values(input){
 display.value += input;
}

function clearinput(){
    display.value="";
}

function calculate(){
    try{
     display.value=eval(display.value);
    }
    catch(error){
        display.value="Error"
        display.style.color="red"
    }   
}

function sqrt(){
    try{
        display.value=Math.sqrt(display.value);
    }catch(error){
        display.value="Error"
    }
};
function power(){
    display.value=Math.pow(display.value,2)
}



