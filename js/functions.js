// alert("Function active");
// ####### tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
//var para variables globales
var days = 10;
var name = "Kevin";
//let àra variables de bloque o locales
let count = 1;

// ######## formas de impresion
//alert 
// alert(name);
//console.log
console.log(name);
//body pantalla
document.write(name + "Kevin");
document.getElementById("box_one").innerHTML = "<h1>Kevin</h1>";
document.getElementById("box_two").innerHTML = "<h1>Kevin</h1>";
//librerias
// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer:"footer: " + name,
//     background: 'green',
//     position: 'top-start',
// });

//#####tipos de datos

var number_one = 20;
var number_two = 5;

//texto

var class_type = "Electiva tecnica 1";

// array - vectores

var array_num = (1,2,3,4,5,6,7);
var array_text = ("lunes", "martes");
var array_mix = (1, "lunes");
var array_mul = (
    (name:"kevin", last_name="alejandro", age:"20"),
    (name:"kevin", last_name="alejandro", age:"20"),
    (name:"kevin", last_name="alejandro", age:"20"),
    (name:"kevin", last_name="alejandro", age:"20")
)

//######### operadores basicos

//suma 

var suma = number_one + number_two;
console.log("suma = " + suma);
//resta
var resta = number_one - number_two;
console.log("resta = " + resta);
//multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
//division
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
//modulo
var modulo = number_one % number_two;
console.log("modulo = " + modulo);