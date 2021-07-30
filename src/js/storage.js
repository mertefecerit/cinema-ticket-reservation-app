export class Storage {
    static save(movie,result){
        let ticket = {
            seats:[],
            price:0,
            movie:""
        }
        ticket.price = result.price;
        ticket.movie = movie.options[movie.selectedIndex].text;
        result.seats.forEach(function (e){
            ticket.seats.push(e.id)
        });
        if(localStorage.getItem("records") !== null){
            let records = JSON.parse(localStorage.getItem("records"));
            records.push(ticket);
            localStorage.setItem("records",JSON.stringify(records));
        }else{
            let records = [];
            records.push(ticket);
            localStorage.setItem("records",JSON.stringify(records));
        }
    }

    getRecords(){
        if(localStorage.getItem("records") !== null){
            return JSON.parse(localStorage.getItem("records"));
        } else {
            return null;
        }
    }
}