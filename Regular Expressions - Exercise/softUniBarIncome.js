function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)[^|$%.]*?\|[^|$%.]*?(?<price>[\d]+[.]*\d+)\$/g;
    let result = 0;
    let i = 0;


    while (input[i] !== "end of shift") {
        let line = input[i];
        let matches = [...line.matchAll(pattern)];
        for (const el of matches) {
            let price = Number(el.groups.quantity) * Number(el.groups.price);
            result += price;
            console.log(`${el.groups.name}: ${el.groups.product} - ${price.toFixed(2)}`);
        }
        i++;

    }
    console.log(`Total income: ${result.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);