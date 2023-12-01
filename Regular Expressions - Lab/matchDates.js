// function matchDates(array) {

//     let regex = /(?<day>\d{2})(?<delimiter>[-/\.])(?<month>[A-Z][a-z]{2})\k<delimiter>(?<year>\d{4})/g;

//     for (let i = 0; i < array.length; i++) {
//         let text = array[i];
//         let match = text.matchAll(regex);
//         for (let curMatc of match) {
//             let res = `Day: ${curMatc.groups.day}, Month: ${curMatc.groups.month}, Year: ${curMatc.groups.year}`
//             console.log(res);
//         }

//     }
// }
// matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
function matchDates(array) {
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    
    let mateches = null;
    while ((mateches = regex.exec(array)) !== null) {
        let day = mateches.groups["day"];
        let month = mateches.groups["month"];
        let year = mateches.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])