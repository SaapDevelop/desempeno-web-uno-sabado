// Pide al usuario el nombre de un producto

let nombreProducto = prompt("Ingrese el nombre de un producto");

// Declara otras dos variables glovales 

let stockProducto = 50;
let ventasTotales = 0;

// Creamos funcion que muestre inventario

function mostrarInventario(){
    console.log("-Producto: " + nombreProducto + "\n-Stock del producto: " + stockProducto + "\n-Ventas Totales: " + ventasTotales);
} 

// Llama a la funcion para mostrarla 

mostrarInventario();

// Creamos una funcion que registre las ventas 

const registrarVenta = function (cantidadVendida){
    if (cantidadVendida <= stockProducto){
        stockProducto -= cantidadVendida;
        ventasTotales += cantidadVendida;
        console.log("Venta realizada con éxito. Cantidad vendida:", cantidadVendida);
        } else {
        console.log("Stock insuficiente para esta venta.");
  }
};

//Ejemplo de registro

registrarVenta (10);

// Función para reponer stock

const reponerStock = function(cantidad) {
  stockProducto += cantidad;
  console.log("Se han repuesto " + cantidad + " unidades. Stock actual: " + stockProducto);
};

// Simulacion un dia de ventas 

const simularDiaDeVentas = () => {
    for (let i = 1; i <= 5; i++){
        console.log("\n Cliente " + i + ": ");
        registrarVenta (8); //Cada cliente compra 8 unidades
        mostrarInventario();
    }

}

mostrarInventario();
simularDiaDeVentas();


// Funcion para verificar el estado del inventario 

function diagnosticoInventario(){
    console.log("\nDiagnostico de inventario: ")

    if(stockProducto >= 30){
        console.log("Nivel de stock óptimo");
    }else if (stockProducto >= 10){
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

// Funcion declarativa para el menu de usuario 

function iniciarGestion(){
    while(true){
        let opcion = prompt ("Menú de Inventario:\n\n1 - Registrar Venta\n2 - Reponer Stock\n3 - Simular Día de Ventas\n4 - Ver Diagnóstico de Inventario\n5 - Mostrar Inventario Actual\n6 - Cerrar programa");

    switch (opcion) {
      case ("1"):
        let cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida:"));
        registrarVenta(cantidadVendida);
        break;

      case ("2"):
        let cantidadReponer = parseInt(prompt("Ingrese la cantidad a reponer:"));
        reponerStock(cantidadReponer);
        break;

      case ("3"):
        simularDiaDeVentas();
        break;

      case ("4"):
        diagnosticoInventario();
        break;

      case ("5"):
        mostrarInventario();
        break;

      case ("6"):
        console.log("Programa cerrado. ¡Hasta pronto!");
        return; // sale del ciclo while y termina la función

      default:
        console.log("Opción no válida. Intenta de nuevo.");
    }
  }
}

// Ejecutar la aplicación
iniciarGestion();