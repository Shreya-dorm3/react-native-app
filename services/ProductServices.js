export var PRODUCTS = [];

export const getProductList = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const json = await response.json();
    PRODUCTS = json.products;
    return json.products;

};

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => product.id == id);
}