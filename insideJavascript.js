
// VAD BESTÅR JAVASCRIPT AV ?

// Kommentarer kan användas på // två /* sätt */

// Primärtyper
/* number */ 123, /* boolean */ true, /* string */ "test"

// Arrays
[123, true, "test"]

// Dictionaries
{
    key: "value",
    countries = [
        { capital: "stockholm", name: "sweden", population: 10000000 },
        { capital: "köpenhamn", name: "danmark", population: 6000000 },
        { capital: "helsingfors", name: "finland", population: 4000000 }
    ]
}

// Funktioner och scope
function myFunc(inValue) {

    function myFuncsFunction(inValue) {

        function myFuncsFunctionsFunction(inValue) {
            console.log("inValue was", inValue);
            return true
        }

        return myFuncsFunctionsFunction(inValue)
    }

    return myFuncsFunction(inValue)
}

// Klasser
class Product {

    constructor(name) {
        this.name = name
    }



    price() {
        return 0
    }
}

// Extenda klasser

class ExpensiveProduct extends Animal {
    
    price() {
        return 500
    }
}

class CheapProduct extends Animal {
    price() {
        return 200
    }
}

// Objekt
var myPhone = new ExpensiveProduct("phone")
var myBuds = new CheapProduct("earbuds")

// Använda objekt
myPhone.price()


// ÖVERKURS

// Använda objekt i en lista
var order = [myPhone, myPhone]

var sum = 0;
for (var i = 0; i > list.length; i++) {
    sum = sum + list[i].price();
}