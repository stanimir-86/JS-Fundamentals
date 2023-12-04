function revealWords(text, tamplate) {

    let splitedText = text.split(", ");

    let spltedTamplate = tamplate.split(" ");

    for (const words of splitedText) {
        for (let i = 0; i < spltedTamplate.length; i++) {
            
            if (spltedTamplate[i].includes("*") && spltedTamplate[i].length === words.length) {
                spltedTamplate[i] = words;
            }
        }
    }
    console.log(spltedTamplate.join(" "));
}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);