function vacation(group, type, day) {
    let sum = 0;
    if (group === "Business" && group >= 100) {
        group -= 10;
    }

    switch (day) {

        case "Friday":
            if (type === "Students") {
                sum = group * 8.45;
            } else if (type === "Business") {
                sum = group * 10.9;
            } else if (type === "Regular") {
                sum = group * 15;
            }
            break;
        case "Saturday":
            if (type === "Students") {
                sum = group * 9.8;
            } else if (type === "Business") {
                sum = group * 15.6;
            } else if (type === "Regular") {
                sum = group * 20;
            }
            break;
        case "Sunday":
            if (type === "Students") {
                sum = group * 10.46;
            } else if (type === "Business") {
                sum = group * 16;
            } else if (type === "Regular") {
                sum = group * 22.5;
            }
            break;
    }
    if (type === "Students" && group >= 30) {
        sum *= 0.85;
    } else if (type === "Regular" && group >= 10 && group < 20) {
        sum *= 0.95;
    }

    console.log(`Total price: ${sum.toFixed(2)}`);

}
vacation(30,
    "Students",
    "Sunday");
vacation(40,
    "Regular",
    "Saturday");

    // function demo(groupOfPeople, typeOfGroup, day) {
    //     let totalPrice = 0;
    //     switch (day) {
    //         case "Friday":
    //             switch (typeOfGroup) {
    //                 case "Students":
    //                     totalPrice = 8.45 * groupOfPeople;
    //                     if (groupOfPeople >= 30) {
    //                         totalPrice *= 0.85;
    //                     }
    //                     break;
    //                 case "Business":
    //                     totalPrice = 10.9 * groupOfPeople;
    //                     if (groupOfPeople >= 100) {
    //                         totalPrice = 10.9 * (groupOfPeople - 10);
    //                     }
    //                     break;
    //                 case "Regular":
    //                     totalPrice = 15 * groupOfPeople;
    //                     if (groupOfPeople >= 10 && groupOfPeople <= 20) {
    //                         totalPrice *= 0.95;
    //                     }
    //                     break;
    //             }
    //             break;
    //         case "Saturday":
    //             switch (typeOfGroup) {
    //                 case "Students":
    //                     totalPrice = 9.8 * groupOfPeople;
    //                     if (groupOfPeople >= 30) {
    //                         totalPrice *= 0.85;
    //                     }
    //                     break;
    //                 case "Business":
    //                     totalPrice = 15.6 * groupOfPeople;
    //                     if (groupOfPeople >= 100) {
    //                         totalPrice = 15.6 * (groupOfPeople - 10);
    //                     }
    //                     break;
    //                 case "Regular":
    //                     totalPrice = 20 * groupOfPeople;
    //                     if (groupOfPeople >= 10 && groupOfPeople <= 20) {
    //                         totalPrice *= 0.95;
    //                     }
    //                     break;
    //             }
    //             break;
    //         case "Sunday":
    //             switch (typeOfGroup) {
    //                 case "Students":
    //                     totalPrice = 10.46 * groupOfPeople;
    //                     if (groupOfPeople >= 30) {
    //                         totalPrice *= 0.85;
    //                     }
    //                     break;
    //                 case "Business":
    //                     totalPrice = 16 * groupOfPeople;
    //                     if (groupOfPeople >= 100) {
    //                         totalPrice = 16 * (groupOfPeople - 10);
    //                     }
    //                     break;
    //                 case "Regular":
    //                     totalPrice = 22.5 * groupOfPeople;
    //                     if (groupOfPeople >= 10 && groupOfPeople <= 20) {
    //                         totalPrice *= 0.95;
    //                     }
    //                     break;
    //             }
    //             break;
    //     }
    //     console.log(`Total price: ${totalPrice.toFixed(2)}`);
    // }