function meetings(input) {
    let obj = {};
    for (let data of input) {
        let [weekday, name] = data.split(" ");
        

        if (obj.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            obj[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);