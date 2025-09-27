// Pide al usuario el nombre de un producto

let nombreProducto = prompt("Ingrese el nombre de un producto");

// Declara otras dos variables glovales 

let stockProducto = 50;
let ventasTotales = 0;

// Mostramos en consola

function mostrarInventario(){
    console.log("Producto: " + nombreProducto + " Stock del producto: " + stockProducto + " Ventas Totales: " + ventasTotales);
} 

//Llama a la funcion para mostrarla 

mostrarInventario();

