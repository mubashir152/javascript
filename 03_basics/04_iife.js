// Imediately invoked Function Expresions (IiFe)

// Named iife
(function chai (){
    console.log(`DB connected`);
})();
// To avoid global scope variable declaration polution we use iife
// (Function)(function Execution call)


// Unamed iife
( (name, age) => {
    console.log(`Second database ${name} and ${age}`);
} )('Mubashir', 2)