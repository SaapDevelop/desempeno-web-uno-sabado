// Pide al usuario el nombre de un producto

let nombreProducto = prompt("Ingrese el nombre de un producto");

// Declara otras dos variables glovales 

let stockProducto = 50;
let ventasTotales = 0;

// Creamos funcion que muestre 

function mostrarInventario(){
    console.log("-Producto: " + nombreProducto + "\n-Stock del producto: " + stockProducto + "\n-Ventas Totales: " + ventasTotales);
} 

// Llama a la funcion para mostrarla 

mostrarInventario();

// Creamos una funcion que registre las ventas 

const registrarVenta = function (cantidadRespuesta){
    if (cantidadRespuesta > 0){
        stockProducto += cantidadRespuesta
        console.log("\n Se añadieron " + cantidadRespuesta + " unidades. Nuevo stock: " + stockProducto)
    }
}

//Ejemplo de registro

registrarVenta (10);

// Simulacion un dia de ventas 

const simularDiaDeVentas = () => {
    for (let i = 1; i <= 5; i++){
        console.log("\n Cliente " + i + ": ");
        registrarVenta (8); //Cada cliente compra 8 unidades
        mostrarInventario();
    }

}

mostrarInventario();


// Funcion para verificar el estado del inventario 

function diagnosticoInventario(){
    console.log("\nDiagnostico de inventario: ")

    if(stockProducto<30){
        console.log("Nivel de stock óptimo");
    }else if (stockProducto < 10){
        console.log("Stock moderado, considera reponer pronto")
    }else{
        console.log("¡Alerta! Bajo stock, reposición urgente")
    }

    switch(true){
        case (ventasTotales >= 40):
        console.log("Producto estrella, alta demanda")
        break;
        case (ventasTotales >= 20):
        console.log("Ventas moderadas")
        break;
        default: 
        console.log("Baja rotación del producto.")
        }
}

simularDiaDeVentas();
diagnosticoInventario();