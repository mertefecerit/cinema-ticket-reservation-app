import {UI} from "./ui";
import {Process} from "./process";

const saloon = document.querySelector('.saloon');
const resultArea = document.querySelector(".result");
const movie = document.querySelector("#movie");
const saveButton = document.querySelector("#saveButton");

let process = new Process();

movie.addEventListener("change",function (){
    let result = process.calculate(saloon);
    UI.changeResultStatus(resultArea,result);
})

saloon.addEventListener("click",function (e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        UI.changeSeatStatus(e.target);
        let result = process.calculate(saloon);
        UI.changeResultStatus(resultArea,result);
    }
})

saveButton.addEventListener("click",function (){
    let result = process.calculate(saloon);

})