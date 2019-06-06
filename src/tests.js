let softwireStaff = require("../external/softwireStaff");

module.exports = {
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
}

function one(){
    /* Excercise one: Simple Promise
        -console log the location of "Josh",
        -Return a promise containing the programmingAbility multiplied by the awesomeness of "Josh"
    */
   return softwireStaff.getPersonData("Josh").then(res => {console.log(res.location);
    return res.programmingAbility * res.awesomeness
});
}

function two(){
    /* Excercise two: Chaining Promises
        -Get the programming ability of James
        -using that, return a promise containing the highest level programming language he can use
    */
   return softwireStaff.getPersonData("James").then(res => softwireStaff.getLanguages(res.programmingAbility)).then(res => res.pop());
}


function three(){
    /* Excercise three: Using Promise.all()
        -get the person with the lowest value for programmingAbility * awesomeness
        -return that persons name in a promise
        -note that the test suite will fail if this takes more than 2 seconds.
    */
   const people = softwireStaff.getAllPeople();
   const allPromises = people.map(person => softwireStaff.getPersonData(person));
   return Promise.all(allPromises).then(results => {
       let lowestValue = Infinity;
       let currentPerson;
       for(let i=0; i< results.length; i++){
           let val = results[i].programmingAbility * results[i].awesomeness

            if ( val < lowestValue){
                lowestValue = val;
                currentPerson = results[i];
            }
       }
       return currentPerson.name;
   })
}

function four(){
    /* Excercise four: exception handling with promises:
        -console log the postcode of everyone's location.
        -if the location has no matching postcode, throw an error in the form "<PersonName> has an invalid location"
        -remember not to take more than 2 seconds.
    */
   const people = softwireStaff.getAllPeople();
   const allPromises = people.map(person => softwireStaff.getPersonData(person));
   return Promise.all(allPromises).then(results => {
       for(let i=0; i< results.length; i++){
        softwireStaff.getPostcode(results[i])
       }
       return currentPerson.name;
   }).catch(err => {throw `${err.personName} has an invalid location`});
}


function five(x){
    /* Excercise 5: Create your own promise:
        -make this function return a promise that:
            +if x is less than or equal to 25, contains the first x fibonnaci numbers in an array
            -If x is more than 25, rejects.
    */
   return new Promise((res, rej) => {
       if(x > 25 || x <= 0){
           rej('must be less than 26 and more than 0')
       } else {
           let currentNumber = 0;
           let nextNumber = 1;
            if (x === 1){
                res([0]);
            } 
            else if (x === 2){
                res([0,1]);
            } else {
                let arr = [0];
                for(let i=1; i<x; i++){
                    arr.push(nextNumber);
                    let tempNumber = nextNumber;
                    nextNumber = currentNumber + nextNumber;
                    currentNumber = tempNumber;
                }
                res(arr);
            }


       }
   });
}


