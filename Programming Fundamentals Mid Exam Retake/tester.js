const arr = [1, 3, 6, 5, 4];

let game = 5;
// const rotatedArr = arr.map((e, i) => arr[arr.length - i - 1])
// console.log(rotatedArr)
function uninstallGame(arr, game) {
    if (!arr.includes(game)) {
        let indexGame = arr.indexOf(game);
        arr.splice(indexGame, 1);
    }
}
console.log(arr);