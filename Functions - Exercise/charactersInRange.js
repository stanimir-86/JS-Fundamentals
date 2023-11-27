function charactersInRange(charA, CharB) {

    let charAfromTable = charA.charCodeAt(0);
    let charBfromTable = CharB.charCodeAt(0);


    let startIndex = charAfromTable > charBfromTable ? charBfromTable : charAfromTable;
    let endIndex = charAfromTable > charBfromTable ? charAfromTable : charBfromTable;


    let buff = "";
    for (let i = startIndex + 1; i < endIndex; i++) {
        buff += String.fromCharCode(i) + " ";
    }
    console.log(buff)
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');