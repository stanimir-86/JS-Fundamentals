function storeProvision(store, orderStore) {

    for (let i = 0; i < orderStore.length; i += 2) {
        let productName = orderStore[i];
        let productQuantity = Number(orderStore[i + 1]);
        if (!store.includes(productName)) {
            store.push(productName);
            store.push(productQuantity)
        } else {
            let addQuantity = store.indexOf(productName)
            addQuantity += 1;
            store[addQuantity] = Number(store[addQuantity]) + productQuantity;


        }

    }
    let obj = {};
    for (let i = 0; i < store.length; i += 2) {
        let finalProduct = store[i];
        let finalCount = Number(store[i + 1]);
        if (obj.hasOwnProperty(finalProduct)) {
            obj[finalProduct] += finalCount;
        } else {
            obj[finalProduct] = finalCount;
        }

    }

    let entries = Object.entries(obj)
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
);
