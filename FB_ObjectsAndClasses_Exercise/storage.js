class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
        return;
    }

    getProducts() {
        let output = [];
        this.storage.forEach(e => {
            output.push(JSON.stringify(e));
        })
        return output.join('\n');
    }

    get totalCost() {
        return this.storage.reduce((a, b) => {return a + b.price * b.quantity}, 0);
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);
console.log(storage.totalCost);