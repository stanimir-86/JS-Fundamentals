function matchFullName(input) {
    let countBarcodes = Number(input.shift());
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm;
    let digitPattern = /\d+/gm;

    for (let i = 0; i < countBarcodes; i++) {

        let line = input.shift();
        let maches = line.match(pattern);
        if (maches) {
            let digits = maches[0].match(digitPattern);
            console.log(`Product group: ${!digits ? '00' : digits.join('')}`);
            continue;
        }
        console.log('Invalid barcode');
    }

}
matchFullName(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);