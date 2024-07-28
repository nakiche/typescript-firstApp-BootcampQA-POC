import { values } from "../enums";
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// ⚠️ NO MODIFICAR LOS NOMBRES DE LAS FUNCIONES NI LOS PARÁMETROS ⚠️

// Queremos que durante cada ejecución de los test automatizados se tome un nombre
// y un apellido de forma aleatoria, para lo cual deberas crear los siguientes métodos

// 1️⃣ ***** EJERCICIO 1 ***** - getRandomElement(arr: string[]) 1️⃣
// REQUISITOS:
//  🟢 La función debe retornar un elemento aleatorio de un array de strings recibido por parametro cada vez que se ejecute
//  🟢 Consejo, revisa las props del objeto Math de Typescript

function getRandomElement(arr: string[]) {
    // Tu código aquí:
}


// 2️⃣ ***** EJERCICIO 2 ***** - RandomNameGenerator(nameOrLastname: values)() 2️⃣
// REQUISITOS:
// 🟢la funcion recibe un string que define si devuelve un nombre aleatorio o un apellido aleatorio
// el valor de este string solo puede ser "Nombre" o "Apellido"
// 🟢Utilizando la función this.getRandomElement que acabas de crear, la funcion devuelve un elemento según el parametro recibido
// es decir un nombre o un apellido, utilizando el array firstNames cuando recibes Nombre y el array lastNames cuando recibes Apellido
// 🟢Ten en cuenta que el valor recibido por parametro es un Enum, es decir debes tratarlo como nombreEnum.Valor
// hint. Estructura del enum en el archivo enums.ts

export function RandomNameGenerator(nameOrLastname: values) {
  let firstNames: string[] = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
  ];
  
  let lastNames: string[] = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
  ];
  // ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
    // Tu código aquí:

}




