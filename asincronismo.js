const categorias = ["Todo","Tecnología","Hogar","Mascotas","Comida","Ropa"]

//Sincrónico
function cambio_categoria_s(categoría){
    for (let i=0; i!=10000000000; i++){
    }
    return `Bienvenido a la sección ${categoría}`
}

console.log("Bienvenido a Amazon Sincrónico");
categorias.forEach((element, i) => {
    console.log(`${i+1}) ${element}`);
});
console.log("Click en Ropa");
const respuesta_s = cambio_categoria_s(categorias[5]);
console.log(respuesta_s);
console.log("Ahora puede Comprar \n");


//Asincrónico
function cambio_categoria_a(categoría){
    console.log(`Bienvenido a la sección ${categoría}`)
}

console.log("Bienvenido a Amazon Asincrónico");
categorias.forEach((element, i) => {
    console.log(`${i+1}) ${element}`);
});
console.log("Click en Ropa")
const data = setTimeout(()=>cambio_categoria_a(categorias[5]),5000)
console.log("Continuar Comprando \n")


//Promesas
console.log("Figuras de acción de Star Wars");

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            datosConexion ? res("Conexión exitosa") : rej("Conexión rechazada")
        },3000)
    })
};

conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))



const obtenerFigurasSTRW = fetch('https://www.swapi.tech/api/people');
const STRWAPI = 'https://www.swapi.tech/api/people';


obtenerFigurasSTRW
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log("La figura seleccionada es: " + respuesta.results[0].name))
    .catch(error=>console.log(error))

//Async - Await

"use strict";

        (async function conexion() {
            try {
                console.log(await conexionBDDExterna(true))
            } catch (error) {
                console.log(error)
            }
        })();

        (async function consumoAPI() {
            try {
                const respuesta = await (await fetch(STRWAPI)).json()
                console.log(respuesta);
                
            } catch (error) {
                console.log(error);
            }
        })();


       
