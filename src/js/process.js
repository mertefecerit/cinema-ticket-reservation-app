export class Process {
    totalPrice = 0;
    calculate(saloon){
        const seatedCount = saloon.querySelectorAll(".seat.selected").length;
        this.totalPrice = parseInt(saloon.querySelector("#movie").value) * seatedCount;
        return {
            price:this.totalPrice,
            count:seatedCount
        };
    }
}