const pintarCarrito = () => {


    // createModal
    modalCont.innerHTML = "";
    modalCont.style.display = ("inline")
    
    const modalHeader = document.createElement("div");
    modalHeader.className = ("modalHeader")
    modalHeader.innerHTML = `
    <h3 class="modalHeaderText">Carrito de compras</h3>
    `;
    
    modalCont.append(modalHeader);

    const modalBtn = document.createElement("h3");
    modalBtn.className = ("modalBtn")
    modalBtn.innerText = ("x");

    modalBtn.addEventListener("click", () => {
        modalCont.style.display = "none";
    })

    modalHeader.append(modalBtn);


    carrito.forEach((product) => {
        let carritoCont = document.createElement("div")
        carritoCont.className = ("modalProdCont")  
        carritoCont.innerHTML = `
            <h4>${product.sabor}</h4>
            <p>${product.precio}$</p>
            <p>Cantidad: ${product.cantidad}</p>
            <p>Total: ${product.cantidad * product.precio}$</p>
            <span class="btnEliminar">Borrar</span> 
        `  
        modalCont.append(carritoCont);


        let eliminar = carritoCont.querySelector(".btnEliminar");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id); 

        })
        // let eliminar = document.createElement("span")
        // eliminar.className = ("btnEliminar");
        // eliminar.innerText = "borrar";
        // carritoCont.append(eliminar);

        // eliminar.addEventListener("click" , eliminarProducto);
    });
    
    // cantidad x prod

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = ("totalCompra")
    totalCompra.innerHTML = `Total a pagar: ${total}$`;
    modalCont.append(totalCompra);
}

verCarrito.addEventListener("click" , pintarCarrito);

// eliminarprod

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    contadorCarrito();
    localS();
    pintarCarrito();
};

// cartcounter visible
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

    // localstorage cartCounter
    const contadorStorage = carrito.length;
    localStorage.setItem("contadorStorage", JSON.stringify(contadorStorage))

    cantidadCarrito.innerHTML = JSON.parse(localStorage.getItem("contadorStorage"));
};

contadorCarrito();