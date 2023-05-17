class productManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
    
    agregarProducto(title, description, price, thumbail, code, stock) {
      const existecode = this.products.find((e) =>{
        return e.code === code
      })
      if(existecode) {
        console.log(`El codigo ${code} ya se encuentra en el arreglo`)
      }else{
        if (title && description && price && thumbail && code&& stock){
      // crear el campo id autoincrementable
      const id = this.products.length + 1;
        
      // crear el producto
      const producto = { id, title, description, price, thumbail, code, stock};
      this.products.push(producto);
        }else{
            console.log(`no se cuentan con todos los parametros para crear el producto`)
        }}
    }

    getProductById (idProduct){
        const existproducto = this.products.find((e) =>{
            return e.id == idProduct
        })
        if(existproducto){
            console.log(this.products[idProduct-1]);
        }else {
            console.log(`Not found`)
        }
    }
   
}
const productos = new productManager()

console.log(productos.getProducts());
productos.agregarProducto(`producto pruebas`, `Este es unproducto deprueba`, 200, `Sin imagen`, `abc123`, 25);
productos.agregarProducto(`producto pruebas1`, `Este es unproducto deprueba`, 200, `Sin imagen`, `abd123`, 25);
productos.agregarProducto(`producto pruebas2`, `Este es unproducto deprueba`, 200, `Sin imagen`, `abe123`, 25);
productos.agregarProducto(`Este es unproducto deprueba`, 200, `Sin imagen`, `abc1234`, 25);
productos.getProductById(2);
productos.getProductById(3);
console.log(productos.getProducts());
