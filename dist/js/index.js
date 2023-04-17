"use strict";
let products = [];
function listProducts() {
    console.log(products);
}
function saveProducts(nome, preco) {
    let produtoObj = {
        name: nome,
        price: preco
    };
    products.push(produtoObj);
}
function editProduct(nameField, name, price) {
    let position = products.findIndex(p => p.name === nameField);
    let newProduct = { name, price };
    products[position] = newProduct;
}
function deleteProduct(nameField) {
    let position = products.findIndex(p => p.name === nameField);
    products.splice(position, 1);
}
saveProducts('ivan', 78787);
saveProducts('olaaa', 888);
console.log(products);
deleteProduct('olaaa');
console.log(products);
