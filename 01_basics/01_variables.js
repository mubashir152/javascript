const accountId = 1234;
let accountName = "Mubashir"
var accountPassword = "1234"
/*
Feature	    var	                                let	                         const
Scope	    Function-scoped	                    Block-scoped	             Block-scoped
Hoisting	Hoisted (initialized as undefined)	Hoisted (not initialized)	 Hoisted (not initialized)
Re-declaration	Allowed	                        Not allowed	                   Not allowed
Mutability	Mutable	                            Mutable	                        Immutable (cannot reassign)
*/
/* 
prefer not to use var because of issue in block scope and functional scope
When to Use Which:
Use const by default, especially for variables that should not be reassigned.
Use let when you need to reassign a variable.
Avoid using var in modern JavaScript, as it can lead to confusion due to its function-scoping and hoisting behavior.
*/
console.table([accountId,accountName,accountPassword])