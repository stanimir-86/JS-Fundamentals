function multiplicationTable(number) {

    for (let i = 1; i <= 10; i++) {

        let currNum = Number(i);
        console.log(`${number} X ${currNum} = ${number*currNum}`);

    }

}
multiplicationTable(5)