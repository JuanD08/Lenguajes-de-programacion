//declaracion de un array 
let numeros = [];
numeros = [19, 33, 45, 56.88, 31, -22];
document.write ("Elementos:", numeros);
document.write ('<br>');
document.write ('segundo elemento:', numeros[1]);
document.write ('<br>');
document.write ('primer elemento:', numeros[0]);
document.write ('<br>');
document.write ('tercer elemento:', numeros[3]);
document.write ('<br>');

// para remplazar uno de los valores iniciales.

numeros[0]=98;
document.write ('elementos ',numeros);
document.write ('<br>');
numeros[5]=178;
document.write ('elementos ',numeros);
document.write ('<br>---------------------------------------------');

let frutas = ['papaya', 'banana', 'mandarina', 'uvas'];
document.write ('<br>');
document.write ('frutas:', frutas);
document.write ('<br>');

// METODOS DE LOS ARRAYS
// Ver cantidad de los elementos

document.write ('cantidad:', frutas.length );
document.write ('<br>');
document.write ('cantidad:', numeros.length);
document.write ('<br>');

// Saber el ultimo elemento
document.write('ultimo elemento: ', numeros[numeros.length-1]);
document.write ('<br>');

// Arrays en tipo texto
document.write('en string: ', numeros.toString());
document.write ('<br>');

// unir tipos de Arrays
let letras = ['x', 'y', 'z'];
let numeros1 =[1,2,3,4];
document.write('alfanumerico: ', letras.concat(numeros1));
document.write ('<br>');

// Borrar ultimo elemento
numeros.pop();
document.write(numeros);
document.write ('<br>');

// Agregar elemento al final
numeros.push(-90);
document.write(numeros);
document.write ('<br>');

// Eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write ('<br>');

// Insertar elementos al inicio
numeros.unshift(1000);
document.write(numeros);
document.write ('<br>');

// Eliminar elementos a partir de un punto
numeros.splice(2,3);
document.write(numeros);
document.write ('<br>');

// Copiar un Array
let cantidades = [100, 200, 300, 600, 800];
let copia = cantidades.slice(1, 3);
document.write('array copia; ',copia);
document.write ('<br>');

// Organizar Arrays de manera alfabetica
let objetos = ['carro', 'avion', 'telefono', 'computador', 'sombrilla', 'bicicleta'];
document.write(objetos.sort());
document.write ('<br>');
document.write(objetos.reverse());
document.write ('<br>');



