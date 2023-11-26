function triplesOfLatinLetters(n) {

    let letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < n; i++) {


        for (let j = 0; j < n; j++) {

            for (let k = 0; k < n; k++) {
                let triples = letters[i] + letters[j] + letters[k];
                console.log(triples);

            }
        }
    }

}
triplesOfLatinLetters(3);
triplesOfLatinLetters(2);