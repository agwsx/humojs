
// capturas
const shopCont = document.getElementById("shopCont");
const verCarrito = document.getElementById("verCarrito");
const modalCont = document.getElementById("modalCont")
const cantidadCarrito = document.getElementById("cantidadCarrito")

//carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// createElements

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h2>${product.sabor}</h2>
    <p>${product.precio}$</p>
    `;

    shopCont.append(content)

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "btn";

    content.append (comprar);

// agregar al carrito

    comprar.addEventListener ("click", () => {
    const repetir = carrito.some((repetirProducto) => repetirProducto.id === product.id);

    if(repetir){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        })
    }
    else {
// push
        carrito.push({
            id: product.id,
            img: product.img,
            sabor: product.sabor,
            precio: product.precio,
            cantidad: product.cantidad,

        });
    };
    contadorCarrito();
    localS();
    });
});

// localstorage
const localS = () =>{
localStorage.setItem("carrito", JSON.stringify(carrito));
}