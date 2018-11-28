// 1) Busque los tipos de "gender" en el arreglo `people.json`

const fs = require('fs');
var map = require('rxjs/operators').map;

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
            console.log('gender',contenidoArchivo);
            contenidoArchivo.map(
                (persons)=> {
                    if (persons === 'male') {
                        maleArreglo.push(persons);
                        console.log(maleArreglo);
                    }else{
                        if(persons === 'female'){
                            femaleArreglo.push(persons);
                            console.log(femaleArreglo);
                        }
                    }
                }
            )
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
            console.log('eye_color',contArchivo);
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
            console.log('skin_color',contArchivo);
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
            console.log('hair_color',contArchivo);
        }
    )
    .catch(
        (Error)=>{
            console.log(Error);
        }
    );

// 5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
//   EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`

    const basesita = JSON.parse(contenidoArchivo);
    basesita.map(function (resultado) {
        return resultado.gender;
    }).forEach(function (resultadoNue) {

        var respuestafilter = resultadoNuev.forEach(function (caracterNom) {
            return caracterNom;
        });

        console.log(respuestafilter);
    });
});

// ## 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.

const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    const basesita = JSON.parse(contenidoArchivo);
    bbd.forEach(function (valorActual) {
        const cont = 0;
        abecedario.forEach(function (value) {
    