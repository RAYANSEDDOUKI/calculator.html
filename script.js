let display = document.getElementById("display");
let btn = document.getElementsByClassName("operator-btn");

function appentto(value){
    display.value += value;
}

function tn(){
    display.value = '';
}

function calculator(){
   try{
       display.value = eval(display.value)
   } catch(error){
       display.value = "Error"
   }
      
}