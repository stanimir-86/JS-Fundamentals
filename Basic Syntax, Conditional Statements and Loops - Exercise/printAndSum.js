function printAndSum(start, end) {
    let sum = 0;
    let buff = "";
    for (let i = start; i <= end; i++) {
        let currNum = Number(i);
        sum += currNum
        buff += currNum + " ";

    }
    console.log(buff);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
