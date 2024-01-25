
const textbox = document.getElementById("textbox");
const toc = document.getElementById("toc");
const tof =document.getElementById("tof");
const result =document.getElementById("result");
let temp;

function convert(){
    if(tof.checked){
     temp =Number(textbox.value);
     temp = temp*9/5 +32;
     result.textContent =temp.toFixed(1) + "F";
    }
    else if(toc.checked){
        temp =Number(textbox.value);
        temp = (temp -32)*(5/9);
        result.textContent =temp.toFixed(1) + "C";
    }
    else{
        result.textContent="select a unit";
    }
}