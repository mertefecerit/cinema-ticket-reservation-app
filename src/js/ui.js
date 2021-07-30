export class UI {
    static changeSeatStatus(target){
        target.classList.toggle("selected");
    }
    static changeResultStatus(resultArea,result){
        resultArea.innerHTML = `<p><span>${result.count}</span> adet koltuk için hesaplanan ücret <span>${result.price}</span> TL.</p>`;
    }
}