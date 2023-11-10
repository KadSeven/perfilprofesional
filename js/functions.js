// alert("FUNCTIONS ACTIVO");
// ############# tipo de variables
// const para valores constantes

const pi = 3.1416;
const pul = 2.54;

// var para variables globales 

var days = 10;
var name = "Kad";

// let para variables de bloque o locales

let count = 1;

// ############### formas de impresion 
// alert

// alert(name);

// console.log

// console.log(name);

// body - pantalla 

// document.write(name + "Sebastian Mosquera");
// document.getElementById("box_one").innerHTML = "<h1>Kad</h1>"
// document.getElementById("box_two").innerText = "<h1>Kad</h1>"

// librerias

// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )
// Swal.fire({
//     icon: 'error',
//     title: name,
//     text: name,
//     footer: "footer: " + name,
//     background:'green',
//     position: 'top-start'
// });

// ########## tipos de datos
// numericos

var number_one = 20;
var number_two = 5.5;

// texto

var class_type = "Eléctiva Técnica 1";

// booleanos 

var boolean = true; //false

// arrays - vectores 

var array_num = [1,2,3,45,3.4,1.2];
var array_text = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
var array_mix = [1, "a",2,"c"];
var array_mul = [
    {name:"Sebastián", last_name:"Mosquera",age:"20"},
    {name:"Andres", last_name:"Rojas",age:"19"},
    {name:"Julian", last_name:"Enrique",age:"18"},
    {name:"Pedro", last_name:"Gonzales",age:"22"}
]

// ########### operadores básicos
// suma

// var suma = number_one + number_two;
// console.log("Suma"  + suma);

// resta

// var resta = number_one - number_two;
// console.log("Resta"  + resta);

// multiplicación

// var multi = number_one * number_two;
// console.log("Multiplicaión"  + multi);

// division

// var divi = number_one / number_two;
// console.log("División"  + divi);

// modulo

// var modulo = number_one % number_two;
// console.log("Módulo"  + modulo);

// OPERADORES LÓGICOS Y ESTRUCTURAS CONDICIONALES (INVERSE, INCREMNETO Y DEMCREMENTO)
// AND && con if - Ampersand

// var bool = false;
// var numeric =10;
// if(!bool && numeric == "10"){ // bool == true
//     console.log("Entra if");
// }
// else{
//     console.log("Entra else");
// }

// OR || con if 

// if(!bool || numeric == 7 ){
//     console.log("Entra if");
//     numeric+=3;
// }else{
//     console.log("Entra else");
//     numeric--;
// }

// // FOR

// for(let j = 0; j<array_text.length; j++){
//     console.log(array_text[j] + (j+1));
// }

// // WHILE

// let j = 0;
// while(j<array_text.length){
//     console.log(array_text[j] + (j+1));
// }

// // DO WHILE

// let m = 0;
// do{
//     console.log(array_text[m] + (m+1));
//     m++;
// }while(m<array_text.length);

//funciones y eventos

function load_page(){
alert("La pagina se ha cargado correctamente");
}

function change_color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff"
}

const btn_limpiar = document.querySelector("#clear_color");

clear_color.addEventListener("click", () =>{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000"
})

//Registro formulario

const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const information = document.getElementById("information");

form_register.addEventListener("submit", name_event =>{
    name_event.preventDefault();
    let info ="";
    console.log(nombres.value.length);
    if(nombres.value.length <=2 || apellidos.value.length <=2){
        info += "Nombres y/o apellidos invalidos";
        information.style.color= "red";
    }else {
        alert(nombres.value + " " + apellidos.value);
    }

    information.innerText = info;
    
})

// Fecha y ejercicio de array

function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled=true;
    // let day = new Date();
    // console.log(date.getMinutes());
    let date = new Date();
    console.log(date.getMinutes());
    for (let j=0; j<array_mul.length; j++){
        console.log(array_mul[j].name);
    }
}

function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style = document.getElementById("nombres");
    if (nombres.length > 2){
            nombres_style.border = "2px solid green";
            document.getElementById("apellidos").disabled = false;
            document.getElementById("apellidos").focus();
            document.getElementById("nombres").value="";
            alert(nombres.concat("Diaz"));
    }
}

// function name_valor(){
//     let nombres = document.getElementById("nombres").value;
//     if (nombres.value.length >2){
//         alert("nombre valido");
//     }
//     else{
//         alert("Nombre invalido");
//     }
// }