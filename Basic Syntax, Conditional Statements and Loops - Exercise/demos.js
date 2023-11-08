function demos(n) {


    let sum = 0;
    let i = 0;
    let counter = 0;

    while (counter < n) {

        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counter++
        }
        i++;
    }



    console.log(`Sum: ${sum}`);
}
demos(5);
console.log("----------");
demos(3);
