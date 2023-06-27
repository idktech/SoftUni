function storeInventory(stock, ordered) {
    let localStorage = {};

    for (let index = 0; index < stock.length; index += 2) {
        let product = stock[index];
        let quantity = Number(stock[index + 1]);
        localStorage[product] = quantity;
    }
    for (let index = 0; index < ordered.length; index += 2) {
        let product = ordered[index];

        if (!localStorage.hasOwnProperty(product)) {
            localStorage[product] = 0;
        }
        localStorage[product] += Number(ordered[index + 1])
    }
    
    for (const productKey in localStorage) {
        console.log(`${productKey} -> ${localStorage[productKey]}`);  
        }
    }


storeInventory([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])