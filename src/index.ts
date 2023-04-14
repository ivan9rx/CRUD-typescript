interface Products {
    name: string;
    price: number;
}

let products: Array<Products> = [

];

function listProducts () {
    console.log(products);
    
}

function saveProducts (nome: string, preco: number) {
    let produtoObj: Products = {
        name: nome,
        price: preco
    };

    products.push(produtoObj);
}

function editProduct (nameField: string, name: string, price: number) {
    let position = products.findIndex(p => p.name === nameField);
    let newProduct: Products = {name, price};
    products[position] = newProduct;
}

function deleteProduct (nameField: string) {
    let position = products.findIndex(p => p.name === nameField);
    products.splice(position, 1);
}


saveProducts('ivan', 78787);
saveProducts('olaaa', 888);
console.log(products);

deleteProduct('olaaa')

console.log(products);