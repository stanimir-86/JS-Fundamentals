function theatrePromotions(day, age) {

    let ticket;
    if (age >= 0 && age <= 122) {
        switch (day) {

            case "Weekday":
                if (age > 18 && age <= 64) {
                    ticket = 18;
                } else {
                    ticket = 12;
                }
                break;
            case "Weekend":
                if (age > 18 && age <= 64) {
                    ticket = 20;
                } else {
                    ticket = 15;
                }
                break;
            case "Holiday":
                if (age <= 18) {
                    ticket = 5;
                } else if (age <= 64) {
                    ticket = 12;
                } else {
                    ticket = 10;
                }
                break;
        }
        console.log(`${ticket}$`);
    } else {
        console.log("Error!");
    }


}
theatrePromotions('Weekday', 42);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 15);
