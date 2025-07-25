const container = document.getElementById("container");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const results = document.getElementById("results");
const submit = document.getElementById("submitBtn");
const clearBtn = document.getElementById("Clear");
const h1 = document.getElementById("h1");
let temp;

function appendToDisplay(input){
    container.value += input;
}
submit.addEventListener("click",()=>{
    if(check1.checked){
        temp = container.value;
        temp = temp * 9/5 + 32;
        results.textContent = temp + "°F";
        h1.textContent = "Unit Convertion: Degrees To Fahnrenheit";
    }
    if(check2.checked){
        temp = container.value;
        temp = (temp-32) * (5/9);
        results.textContent = temp + "°C";
        h1.textContent = "Unit Convertion: Fahnrenheit To Degrees";
    }
    else{
        h1.textContent = "Select Unit";
    }
})
clearBtn.addEventListener("click",()=>{
    container.value = "";
    results.textContent = "";
    h1.textContent = "Unit Convertion:"
})

