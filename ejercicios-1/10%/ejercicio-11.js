// Ejercicio 11: Resolver el Problema ReferenceError en Código JavaScript

// Error típico:
// ReferenceError: <<identificador>> is not defined

function mostrarSaludo(){
    var mensaje = 'Hola... Este código se ejecuta en una función';
    console.log(mensaje);
}

// console.log(mensaje); -> ReferenceError: <<identificador>> is not defined
mostrarSaludo();