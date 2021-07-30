export class UI {
    static changeSeatStatus(target){
        target.classList.toggle("selected");
    }
    static changeResultStatus(resultArea,result){
        resultArea.innerHTML = `<p><span>${result.count}</span> adet koltuk için hesaplanan ücret <span>${result.price}</span> TL.</p>`;
    }
    static setSeatStatus(result){
        if(result !== null){
            result.forEach(function (record){
                record.seats.forEach(function (seatId){
                    document.getElementById(seatId).classList.remove("selected");
                    document.getElementById(seatId).classList.add("reserved");
                });
            });
           document.querySelector(".result").innerHTML = `<p><span>0</span> adet koltuk için hesaplanan ücret <span>0</span> TL.</p>`;
        }
    }
}