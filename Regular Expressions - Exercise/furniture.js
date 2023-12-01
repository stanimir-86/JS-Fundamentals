function furniture(array) {
    console.log("Bought furniture:");
    let regex = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    for (let line of array) {
        if (line === "Purchase") {
            break;
        }
        if (regex.test(line)) {
            let product = regex.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity)
            totalMoney += price;
            console.log(product.groups.furniture);
        }

    }
console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);