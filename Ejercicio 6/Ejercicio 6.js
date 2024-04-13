        //Ejercicio 1
        console.log("Ejecicio 1");
        //"let" se utiliza para declarar una variable, seguido de el nombre de la variable ej: "variable1" se pone el igual y luego
//        el valor de la variable.
        let hola= "Hola mundo"
        console.log(hola);

        //Ejercicio 2
        console.log("Ejecicio 2");

        //Tecnicamente no funcionaria ya que tienen el mismo nombre de variable (variable1).
        // let variable1= '123'; 
        let variable1= 'Chascomus';
        console.log(variable1);

        //Ejercicio 3
        console.log("Ejecicio 3");

        let miNumero1 = 123; //Es de tipo 'number' (no tiene comillas).

        let miNumero2 = 12.3;// es de tipo 'number'(no tiene comillas).

        let miString = "argentina"; //Es de tipo 'string'(usa comillas).

        let miBoolean = true; //Es de tipo 'boolean' (true o false).

        let indefinido; //Es de tipo 'undefined' (es una variable nula).

        let miObjeto1 = {}; //Es de tipo 'object'.
        
        console.log(miNumero1, miNumero2, miString, miBoolean, indefinido, miObjeto1); 
        console.log(miNumero1+miNumero2);

        //Ejercicio 4
        console.log("Ejecicio 4");

        let miPalabra = "Electronica";

        console.log(parseInt(miPalabra)); //La funcion 'parseInt' es para cambiar el valor de la variable a string a un entero,
        //por lo cual no mostrara nada ya que son letras y no numeros. En pocas palabras le saca las comillas y letras para quedarse
//        con los numeros.

        //Ejercicio 5
        console.log("Ejecicio 5");
        let miNumero4 = 123;
        let miNumero3 = "2";
        //Para sumar estas variables se usa 'console.log()' y los nombres de las variables separadas por un +,
//        en el caso que sea de tipo string antes de colocar la variable se usaria 'parseInt()'.
        console.log(miNumero4+parseInt(miNumero3));

        //Ejercicio 6
        console.log("Ejecicio 6");
        let suma = 0;
        //El bucle "for" permite recorrer los primeros 10 números naturales y sumarlos.
        for (let i = 1; i <= 10; i++) {
        suma += i;
        }
        console.log("La suma de los primeros 10 números naturales es:", suma);

        //Ejecicio 7 
        console.log('Ejercicio 7');

        // Defini una variable con varios valores 
        let palabras = ["dado", "electronica", "escocia", "rosario"];

        function encontrarPosicionA(palabra) {
            return palabra.split('').findIndex(letra => letra === 'a');
        }
        //"palabra.split('')" divide la palabra y lo devuelve en un array de caracteres ej: "d", "a", "d", "o".
        //findIndex(letra => letra === 'a') que busca el primer elemento en el array que cumpla con la condición especificada ("a").


        for (let palabra of palabras) {
            let posicion = encontrarPosicionA(palabra);
            console.log(`Posición de la letra 'a' en la palabra "${palabra}": ${posicion}`);
        }
        //"for (let palabra of palabras):" Este bucle for...of recorre cada elemento del array palabras. En cada iteración, palabra toma
//        el valor de uno de los elementos del array, es decir, una de las palabras.
        //"let posicion = encontrarPosicionA(palabra);" Para cada palabra en palabras, llama a la función encontrarPosicionA(palabra). 
//        Esta función devuelve la primera posición de la letra "a" en la palabra, o -1 si no se encuentra "a". 

        //Ejercicio 8
        console.log('Ejercicio 8');

        let miPalabra2 = "Caminando en línea recta no puede uno llegar muy lejos";
        let longitud = miPalabra.split(' ').length; //Esto cuenta la longitud de la frase
        if (longitud > 50) {
            console.log("La frase tiene más de 50 palabras");
        } else 
        //el condicional if compara esta longitud con 50. Si la longitud es mayor que 50, muestra el mensaje "La frase tiene más de 50 
//        palabras". De lo contrario, muestra "La frase tiene menos de 50 palabras".
        {
            console.log("La frase tiene menos de 50 palabras");
        }

        //Ejercicio 9
        console.log('Ejercicio 9');

        let miArrayDeNumeros = new Array();
        miArrayDeNumeros[0] = 1;
        miArrayDeNumeros[1] = 15;
        miArrayDeNumeros[2] = 157;
        miArrayDeNumeros[3] = 63;
        miArrayDeNumeros[4] = 68;
        miArrayDeNumeros[5] = 1000;
        miArrayDeNumeros[6] = 44;

        // Recorrer miArrayDeNumeros y verificar si cada número es par o no
        for (let i = 0; i < miArrayDeNumeros.length; i++) {//Se usa un bucle for para repetir sobre cada elemento en miArrayDeNumeros. 
            if (miArrayDeNumeros[i] % 2 == 0) {
                console.log(miArrayDeNumeros[i] + " es un número par");
            } else {//Si el número es par, se muestra que es un número par. De lo contrario, se muestra que no es un número par.
                console.log(miArrayDeNumeros[i] + " no es un número par");
            }
        }
        //Se usa un condicional "if" para verificar si el elemento actual (miArrayDeNumeros[i]) es divisible por 2 sin dejar un
//        residuo. Esto se hace con la expresión miArrayDeNumeros[i] % 2 == 0.

        //Ejecicio 10
        console.log("Ejecicio 10");
        
        var numero1 = 5;
        var numero2 = 8;

        if (numero1 >= numero2) {//En este condicional, verifica si numero1 es mayor o igual que numero2. Si la condición es 
            console.log("numero1 no es mayor que numero2");//verdadera, se muestra el mensaje "numero1 no es mayor que numero2".
        }
        if (numero2 > 0) {//En este condicional, verifica si numero2 es mayor que 0. Si la condición es verdadera, 
            console.log("numero2 es positivo");//se muestra el mensaje "numero2 es positivo".
        }
        if (numero1 != 0) {//En esta condicional, verifica si numero1 es diferente de 0. Si la condición es verdadera,
            console.log("numero1 es distinto de cero");//se muestra el mensaje "numero1 es distinto de cero".
        }
        if (numero1 + 1 < numero2) {//En este condicional, verifica si incrementar en 1 unidad el valor de numero1 lo hace 
//        menor que numero2. Si la condición es verdadera, se muestra el mensaje "Incrementar en 1 unidad el valor de numero1
//        no lo hace mayor o igual que numero2".
            console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
        }

        //Ejercicio 11
        console.log("Ejecicio 11");

        let nombre = "Lucas";
        let edad = 18;
        let ciudad = "Chascomus";
        console.log('nombre:', nombre,'Edad:', edad, 'Ciudad:', ciudad);

        // Declaración de Constante.
        const PI = 3.14159;
        console.log(PI);

        // Intentar asignar un nuevo valor a PI.
        //PI = 3.14; // Esto genera un error ya que PI es una constante y su valor no se puede cambiar.

        //Ejercicio 12
        console.log("Ejecicio 12");

        // Declaración de una variable tipo número.
        let precio = 29.99;
        console.log(precio);

        // Declaración de una variable tipo booleano.
        let disponible = false;
        console.log(disponible);

        // Declaración de una variable tipo array.
        let frutas = ['manzana', 'banana', 'naranja'];
        console.log(frutas);

        let info = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
        console.log(info);

        //Ejercicio 13
        console.log("Ejecicio 13");

        // Array de frutas
        let frutas1 = ['manzana', 'banana', 'naranja'];

        //Se usa un bucle for para recorrer el array frutas1 y mostrar cada elemento en la consola.
        console.log("Elementos del array frutas:");
        for (let i = 0; i < frutas1.length; i++) {
            console.log(frutas1[i]);
        }

        //Defini una función "sumarNumeros" que toma un array de números como argumento y devuelve la suma de todos los números
//        en el array.
        function sumarNumeros(numeros) {
            let suma = 0;
            for (let numero of numeros) {
                suma += numero;
            }
            return suma;
        }

        let numeros = [1, 2, 3, 4, 5];
        console.log("La suma de los números es:", sumarNumeros(numeros));

        //Defini una función "encontrarLargoPalabras" que toma un array de palabras como argumento y devuelve un nuevo array con
//       la longitud de cada palabra.
        function encontrarLargoPalabras(palabras1) {
            let longitudes = [];
            for (let palabra1 of palabras1) {
                longitudes.push(palabra1.length);
            }
            return longitudes;
        }

        //Despues, use estas funciones con ejemplos de arrays de números y palabras para mostrar el funcionamiento.
        let palabras1 = ['casa', 'perro', 'computadora'];
        console.log("Longitudes de las palabras:", encontrarLargoPalabras(palabras));

        //Ejercicio 14
        console.log("Ejecicio 14");

        //La función map() se utiliza para transformar cada elemento de un array y devolver un nuevo array con los resultados
//        de la transformación. 
        let numeros1 = [1, 2, 3, 4, 5];
        let cuadrados = numeros1.map(numero1 => numero1 * numero1);
        console.log(cuadrados);
        //se podria usar "map()" para transformar los elementos de un array de datos en otro formato.

        //La función reduce() se utiliza para reducir los elementos de un array a un solo valor, aplicando una función acumuladora
//        que se ejecuta en cada elemento del array. 
        let numeros2 = [1, 2, 3, 4, 5];
        let suma1 = numeros2.reduce((acumulador, numero2) => acumulador + numero2, 0);
        console.log(suma1);
        //Se aplica reduce() para realizar operaciones de agregación en un array, como sumar todos los elementos o calcular un 
//        promedio.


        //La función filter() se utiliza para filtrar elementos de un array según una condición especificada en una función de
//        prueba. Retorna un nuevo array con los elementos que pasaron la prueba. 
        let numeros3 = [1, 2, 3, 4, 5];
        let pares = numeros3.filter(numero3 => numero3 % 2 === 0);
        console.log(pares);
        //"filter()" se aplica para filtrar elementos de un array según ciertos criterios, como seleccionar solo los elementos 
//        que cumplan cierta condición.








const textoParpadeante = document.getElementById('textoParpadeante');

let mostrar = true;

setInterval(() => {
    if (mostrar) {
        textoParpadeante.style.display = 'none';
    } else {
        textoParpadeante.style.display = 'block';
    }
    mostrar = !mostrar;
}, 800);

const Hola = document.getElementById('Hola');

let mostrar1 = true;

setInterval(() => {
    if (mostrar1) {
        Hola.style.display = 'none';
    } else {
        Hola.style.display = 'block';
    }
    mostrar1 = !mostrar1;
}, 800);

const Hola1 = document.getElementById('Hola1');

let mostrar2 = true;

setInterval(() => {
    if (mostrar2) {
        Hola1.style.display = 'none';
    } else {
        Hola1.style.display = 'block';
    }
    mostrar2 = !mostrar2;
}, 800);