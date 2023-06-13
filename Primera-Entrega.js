class ProductManager {
    constructor(){
        this.products = [];
    }

    addList(title, description, price, thumbnail, code, stock = 20,) {
        const product = {
            id: this.#getMaxId() + 1,
            title,
            description,
            price: price,
            thumbnail,
            code,
            stock: []
        };
        this.products.push(product);
    }

    #getMaxId(){  
        let maxId = 0;
        this.products.map((product) =>{
            if(product.id > maxId) maxId = product.id;
        })
        return maxId; 
    }

    #getProducts(){
        return this.product;
    }

    addProduct(idproduct, stock){
        const product = this.#getProducts(idproduct);
        if(product){
            if(!product.stock.includes(idproduct)) product.stock.push(idproduct); 
        } else {
            console.log('Not found');
        }
    }

    #getProductById(idProduct){
        return this.products.find(product => product.id === idProduct);
    }

    productList(idproduct,newCode ){
        const product = this.#getProducts(idproduct);
        if(product){
            const newProduct = {
                ...product,
                id: this.#getMaxId() + 1,
                code: newCode,
                stock: [],
            };
            this.product.push(newProduct);
        } else {
            console.log('this event not exists!');
        }
    }
}

const Product = new ProductManager();

Product.addEvent('silla gamer', 'azul ecocuero','65000','https://www.laeditorial.com.ar/28754-large_default/silla-gamer-premium-home-azul-139-00439.jpg','#45');
Product.addEvent('escritorio', 'clasico con estantes','20000','https://arcencohogar.vtexassets.com/arquivos/ids/341612-1200-1200?v=638103539103830000&width=1200&height=1200&aspect=true','#46');
Product.addEvent('auriculares', 'Comodos y livianos con banda ajustable para mas comodidad','2000','https://medias.musimundo.com/medias/00590020-146953-146953-01-146953-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MDg3OXxpbWFnZS9qcGVnfGg1MS9oOTYvMTA0MTA3ODA5MTc3OTAvMDA1OTAwMjAtMTQ2OTUzLTE0Njk1M18wMS0xNDY5NTNfMDEuanBnX3NpemU1MTV8ZjZjMDg1ZjNmZDY1ZDc5N2M1YzM1ZmYzN2E4YjdlZjAzYmY4ZGJkMTRkOWZhN2YzYTlkYTU5ODI3MGUxOWQ4MQ','#47');
Product.addEvent('mouse gamer', 'luz rgb, 7 botones','5000','https://medias.musimundo.com/medias/00407030-143459-143459-01-143459-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wzNTA5MnxpbWFnZS9qcGVnfGhjZS9oZGIvMTAzOTQ0NjA1MjA0NzgvMDA0MDcwMzAtMTQzNDU5LTE0MzQ1OV8wMS0xNDM0NTlfMDEuanBnX3NpemU1MTV8NGQxMjI3ZDI0MzQ4OWRjM2JlOTU0M2ZiNDBkMTc5Y2FmODVjMGFlNTYwMjY2NWVlZmM1YjA1N2Q3NmY1ZDU0Yg','#48');
Product.addEvent('telcado', 'mecanico','7000','https://http2.mlstatic.com/D_NQ_NP_789265-MLA43540912849_092020-O.jpg','#49');
console.log(ProductManager.getProductById());
