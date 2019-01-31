// 1) Busque los tipos de "gender" en el arreglo `people.json`

const fs = require('fs');

function gender() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error',err});
                    } else {
                        const basesita = JSON.parse(contenido);
                        const encontrarPer = bdd.persons
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            )
                        resolve(encontrarPer);
                    }
                });
        }
    );
}
buscarGender()
    .then(
        (contenidoArchivo)=>{
            console.log(contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Mal',resultadoError);
        }
    );

/*const respuestaMap = .map(
    (valorActual)=>{
        return valorActual.toUpperCase();
    }
);
*/

// 2) Busque los tipos de "eye_color" en el arreglo `people.json`

function eye_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error',err});
                    } else {
                        const basesita = JSON.parse(contenido);
                        const encontrarPer = bdd.persons
                            .map(
                                (people)=>{
                                    return  people.eye_color;
                                }
                            )
                        resolve(encontrarPer);
                    }
                });
        }
    );
};
eye_color()
    .then(
        (contArchivo)=>{
            console.log(contArchivo);
        }
    )
    .catch(
        (Error)=>{
            console.log(Error);
        }
    );

// 3) Busque los tipos de "skin_color" en el arreglo `people.json`

function skin_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error',err});
                    } else {
                        const basesita = JSON.parse(contenido);
                        const encontrarPer = bdd.persons
                            .map(
                                (people)=>{
                                    return  people.skin_color;
                                }
                            )
                        resolve(encontrarPer);
                    }
                });
        }
    );
};
skin_color()
    .then(
        (contArchivo)=>{
            console.log(contArchivo);
        }
    )
    .catch(
        (Error)=>{
            console.log(Error);
        }
    );

// 4) Busque los tipos de "hair_color" en el arreglo `people.json`

function hair_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error',err});
                    } else {
                        const basesita = JSON.parse(contenido);
                        const encontrarPer = bdd.persons
                            .map(
                                (people)=>{
                                    return  people.hair_color;
                                }
                            )
                        resolve(encontrarPer);
                    }
                });
        }
    );
};
hair_color()
    .then(
        (contArchivo)=>{
            console.log(contArchivo);
        }
    )
    .catch(
        (Error)=>{
            console.log(Error);
        }
    );

// 5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
//   EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`

function ClasificarGender() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error',err});
                    } else {
                        const basesita = JSON.parse(contenido);
                        const encontrarPer = bdd.persons
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            )
                        resolve(encontrarPer);
                    }
                });
        }
    );
}

var arregloFemale = []
var arregloMale = []

buscarGender()
    .then(
        (contenidoArchivo)=>{
            contenidoArchivo.map(
                (personas)=>{
                    if (personas === 'male'){
                        arregloMale.push(personas);
                        console.log(arregloMale);
                    }else{(personas ==='female')
                        arregloFemale.push(personas);
                        console.log(arregloFemale);
                    }
                }
            );
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Mal',resultadoError);
        }
    );

// ## 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.

const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function buscarAbeced() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.persona.map(
                                (people)=>{
                                    return  people.name;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}
buscarAbeced()
    .then(
        (contenidoArchivo)=>{
            console.log(contenidoArchivo)
            contenidoArchivo.map(
                (usuarios)=>{
                    if(usuarios === 'a'){
                        console.log('true');
                    }else if (usuarios === 'b') {
                        console.log('true');
                    }else if (usuarios === 'c') {
                        console.log('true');
                    }else if (usuarios === 'd') {
                        console.log('true');
                    }else if (usuarios === 'e') {
                        console.log('true');
                    }else if (usuarios === 'f') {
                        console.log('true');
                    }else if (usuarios === 'g') {
                        console.log('true');
                    }else if (usuarios === 'h') {
                        console.log('true');
                    }else if (usuarios === 'i') {
                        console.log('true');
                    }else if (usuarios === 'j') {
                        console.log('true');
                    }else if (usuarios === 'k') {
                        console.log('true');
                    }else if (usuarios === 'l') {
                        console.log('true');
                    }else if (usuarios === 'm') {
                        console.log('true');
                    }else if (usuarios === 'n') {
                        console.log('true');
                    }else{
                        console.log('false');
                    }
                }
            )
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )