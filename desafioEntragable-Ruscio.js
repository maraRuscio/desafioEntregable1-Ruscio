const fs = require('fs')

class ProductManager {
  #path
    constructor(path) {
      this.#path = path;
      this.products = this.#leerArchivo();
    }

    #leerArchivo (){
      try {
        if (fs.existsSync(this.#path)) 
          return JSON.parse(fs.readFileSync(this.#path, 'utf8'));
        else
        return [];
      } catch (error) {
        console.log(error);
      }
    }
  

    getProducts() {
       return this.products;
      }
    
    
    agregarProducto(title, description, price, thumbail, code, stock) {
      try {
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
          fs.wrtiteFileSync(this.#path, JSON.stringify(this.products));
        }else{
          console.log(`no se cuentan con todos los parametros para crear el producto`)
        }}
      }catch(e){
      console.log(`${e} no se pudo escribir el archivo`);
      };
    };

    getProductById (idProduct){
        const existproducto = this.products.find(e => e.id === idProduct)
        if(existproducto){
            console.log(existproducto);
        }else {
            console.log(`Not found`)
        }
    }

    deleteProduct (idProduct){
     try {
      let men;
      const ind = this.products.findIndex(e => e.id === idProduct)
        if(ind < 0)
          men = `el producto con ID ${idProduct}no existe`;
        else{
          this.products.splice(ind, 1);
          fs.wrtiteFileSync(this.#path, JSON.stringify(this.products));
          men = `el producto con ID ${idProduct} fue eliminado`
        }
        return men;
     } catch (error) {
      console.log(error);
      
     }
      }

    updateProduct (idProduct, propiedad){
      try {
        let men;
      const ind = this.products.findIndex( e => e.id === idProduct);
      if(ind > -1){
        const {id, ...rest} = propiedad;
        this.products[ind] = {...this.products[ind], ...rest};
        fs.wrtiteFileSync(this.#path, JSON.stringify(this.products));
        men= `el producto con ID ${idProduct} fue modificado exitosamente`;
    }else
      men = `el producto con ID ${idProduct} no existe`;
   console.log(men);
      } catch (error) {
        console.log(error);
        
      }
}

}

module.exports = {
  ProductManager
}