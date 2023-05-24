const { ProductManager } = require('./desafioEntragable-Ruscio.js')

const productos = new ProductManager('./data/productos.json');

console.log(productos.getProducts());
productos.agregarProducto(`producto prueba`, `Este es un producto prueba`, 200, `Sin imagen`, `abc123`, 25);
console.log(productos.getProducts());
productos.getProductById(1);
productos.getProductById(4);
productos.agregarProducto(`producto prueba`, `Este es un producto prueba`, 100, `Sin imagenes`, `abc1234`, 255);
console.log(productos.deleteProduct(3));
console.log(productos.deleteProduct(1));
console.log(productos.getProducts());

const prop = {
  id: 20,
  price: 5,
  stock:100,
  thumbail: './img/algo.jpg',
};
productos.updateProduct(2,prop)
productos.updateProduct(4,prop)
console.log(productos.getProducts());