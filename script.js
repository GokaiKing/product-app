class Product{
    constructor(name, price, quantity, year){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.year = year;
    }
}

class UI{
    addProduct(Product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML= `
            <div class = "card text-center mb-4">
                <div class = "card-body">
                    <strong>Product Name: </strong>${Product.name}
                    <strong>Product Price: </strong>${Product.price}
                    <strong>Product Quantity: </strong>${Product.quantity}
                    <strong>Product Date: </strong>${Product.year}
                    <a type ="submit" href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    removeProduct(Product){
        if(Product.name === "delete"){
            Product.parentElement.parentElement.remove();
            this.showMessage('Product Deleted', 'info');
        }
    }


    showMessage(message, cssClass){
        const element = document.createElement('div');
        element.className = `alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);

        //callback
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    e.preventDefault();

    const ui = new UI();

    const nombre = document.getElementById('name').value;
    const precio = document.getElementById('price').value;
    const cantidad = document.getElementById('quantity').value;
    const año = document.getElementById('year').value;

    if(nombre == "" || precio == "" || cantidad == "" || !year){
        ui.showMessage('Can not leave empty spaces', 'danger');
    }else{
        const Producto = new Product(nombre, precio, cantidad, año);
        ui.addProduct(Producto);
        ui.showMessage('Product Added Successfully', 'success');
    }
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeProduct(e.target);
});