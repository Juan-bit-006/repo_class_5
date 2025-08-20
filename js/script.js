const botonAlerta =document.getElementById("btnAlerta");

botonAlerta.addEventListener("click", function(){
    alert("Script usando un archivo externo");
})

//variables

// var numero=5;

let otronumero=10;
console.log (typeof otronumero);
numero="120";
console.log (typeof otronumero);


const dia="martes";

console.log("numeros "/*+numero+*/+"," +otronumero+" dia :"+ dia)

//tipos de datos
const nombre="Juan";//string
const id=123456;//numero
const esEstudiante=true;//booleano

//condicionales
let edad=prompt("Digite su edad ");
if (edad<17){
console.log("Menor de edad")
}else {
    console.log("Mayor de edad")
}

//objeto que describe una persona
const persona  ={
    nombre:"Juan",
    apellido:"Ortega",
    edad: 20,
    esActivo: false,
    hoobies: ["leer", "correr", "cine"]
};

console.log("Nombre Completo: ", persona.nombre,persona.apellido);
persona.nombre="Andrea";
console.log("Nombre Completo: ", persona.nombre,persona.apellido);
console.log("Unos de sus hobbies es , ", persona.hoobies[1]);

//ciclo for

const usuarios=[
    {nombre:"Elena",rol:"admin"},
    {nombre:"Carlos",rol:"vendedor"},
    {nombre:"Ana",rol:"user"}
];

console.log ("for clasico");
for(let i=0; i<usuarios.length;i++){
    console.log(`hola, ${usuarios[i].nombre}`);
}

//forEach
console.log("foreach");

usuarios.forEach(usuarios=>{
    console.log(`Biemvenido, ${usuarios.nombre}`);
});

//for Of
console.log("for of");
for(let usuario of usuarios){
    console.log(`Hi, ${usuario.nombre}`);
}

//funciones
//funciones normales
function sumar(a, b){
    return a + b;
}
console.log(sumar(4,5));

//funciones anonimas
const sumarAnonima=function(a,b){
    return a + b;
}

console.log(sumarAnonima(6,7));

//funciones flecha
const sumaFlecha=(a,b)=>a+b;
console.log(sumaFlecha(23,24));

const verificarEdad=(edad)=>{
    if (edad>=18){
        return "Mayor de edad";
    }else{
        return "Menor de edad";
    }
}

console.log(verificarEdad(34));

//manejo DOM
//seleccionar elementos

const titulo=document.getElementById("titulo-org");
const conteiner=document.getElementById("conteiner");
const botonActualizar=document.querySelector("#btn-act");
const parrafo=document.querySelector(".parrafo")

//manipular elementos
botonActualizar.addEventListener("click",()=>{
    titulo.textContent="Titulo modificado";
    parrafo.textContent="Parrafo modificado";

    conteiner.innerHTML="<p>este parrafo se agrega dinamicamente desde js </p>";

    //modificar estilos
    titulo.style.color="blue";
    conteiner.style.border="1px solid red";
    conteiner.style.padding="20px";
    conteiner.style.margin="15px"

});


//querySelectorAll
const botonUno=document.getElementById("btn-uno");
const botonDos=document.querySelector("#btn-dos");

const primeraCaja=document.querySelector(".caja");
const todasCajas=document.querySelectorAll(".caja");

botonUno.addEventListener("click",()=>{
   primeraCaja.style.backgroundcolor="red";
});
botonDos.addEventListener("click",()=>{
    todasCajas.forEach(caja=>{
        caja.style.backgroundcolor="blue"
    });
});