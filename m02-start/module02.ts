/* Module 2: Declare variable types in TypeScript
   Lab start  */

/*  EXERCISE 1
    TODO: Modify the code to add types to the variable declarations. 
    The resulting JavaScript should look the same as the original example when you're done. */

let firstName;
let lastName;
let fullName;
let age;
let ukCitizen;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

/* EXERCISE 2
   TODO: You can use types to ensure operation outcomes. Run the code as is and then modify 
   it to have strongly typed variables. Then, address any errors you find so that the result 
   returned to a is 12. */

let x : number;
let y: number;
let a: number;

x = 5;
y = 7;
a = x + y;

console.log(a);

/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */



// como queremos darle mejor uso a la funcion procedemos hacer un enum
enum Season{
    //creamos los enum como si fueran variables es decir declaramos lo que queremos usar y luego le damos el valor
    Fall = 'Fall',
    Winter = 'Winter',
    Spring = 'Spring',
    Summer = 'Summer',
}
//lo primero que hacemos es declarar la funcion
function whichMonths(season : string){
    //aqui declaramos la funcion de cual es el mes de la temporada
    let monthInTheSeason: string;
    //ahora vamos a crear un switch para cada sesion 
    switch(season) {
        //creamos los caso de cada temporada, como ya creamos el enum remplazamos el 
        //texto por el enum es decir llamamos Season. para llamar la temporada que queremos usar
        case Season.Fall:
            //aqui ponemos que meses corresponden a fall con el monthsOfTheSeason
            monthInTheSeason = 'The Fall is september to november';
            //un break para cerrar el switch
            break;
        case Season.Winter:
            monthInTheSeason = 'The Winter is december to february';
            break;
        case Season.Spring:
            monthInTheSeason = 'The Spring is march to may';
            break;
        case Season.Summer:
            monthInTheSeason = 'The Summer is june to august';
            break;
        // aqui se utiliza un default para cuando el usuario ingrese un valor no valido
        default:
            monthInTheSeason = 'The season not found'

    } //aqui ingresamos un return que nos devuelva el mes de la temporada
    return monthInTheSeason;
    
}
// utilizamos el console log para ver por consola el resultado, como ya creamos el enum+
//lo llamamos sin las comillas y de la siguiente forma
console.log(whichMonths(Season.Fall));
console.log(whichMonths(Season.Winter));
console.log(whichMonths(Season.Spring));
console.log(whichMonths(Season.Summer));

//de esta forma esta correcto pero queremos que no se tenga q escribir la temporada como un
//string sino que queremos usar un enum por lo q procedemos a crear el enum antes de la funcion




 /*EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array.*/ 
// de esta manera se declara el tipo de una matriz -->
   let randomNumbers : number[] = [];
   let nextNumber : number;
   
   for (let i = 0; i < 10; i++) {
       nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
       randomNumbers.push(nextNumber);
   }
   
   console.log(randomNumbers);
