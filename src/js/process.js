export class Process {
    totalPrice = 0;
    calculate(saloon){
        const selectedSeats = saloon.querySelectorAll(".seat.selected");
        this.totalPrice = parseInt(saloon.querySelector("#movie").value) * selectedSeats.length;
        return {
            price:this.totalPrice,
            count:selectedSeats.length,
            seats : selectedSeats
        };
    }
}