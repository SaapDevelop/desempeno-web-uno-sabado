// Pide al usuario el nombre de un producto

let nombreProducto = prompt("Ingrese el nombre de un producto");

// Declara otras dos variables glovales 

let stockProducto = 50;
let ventasTotales = 0;

// Creamos funcion que muestre 

function mostrarInventario(){
    console.log("-Producto: " + nombreProducto + " -Stock del producto: " + stockProducto + " -Ventas Totales: " + ventasTotales);
} 

// Llama a la funcion para mostrarla 

mostrarInventario();

// Creamos una funcion que registre las ventas 

const registrarVenta = function (cantidadRespuesta){
    if (cantidadRespuesta > 0){
        stockProducto += cantidadRespuesta
        console.log("Se añadieron " + cantidadRespuesta + " unidades. Nuevo stock: " + stockProducto)
    }
}

//Ejemplo de registro

registrarVenta (10);
mostrarInventario();

