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
}

function two(){
    /* Excercise two: Chaining Promises
        -Get the programming ability of James
        -using that, return a promise containing the highest level programming language he can use
    */
}


function three(){
    /* Excercise three: Using Promise.all()
        -get the person with the lowest value for programmingAbility * awesomeness
        -return that persons name in a promise
        -note that the test suite will fail if this takes more than 2 seconds.
    */
}

function four(){
    /* Excercise four: exception handling with promises:
        -console log the postcode of everyone's location.
        -if the location has no matching postcode, throw an error in the form "<PersonName> has an invalid location"
        -remember not to take more than 2 seconds.
    */
}


function five(x){
    /* Excercise 5: Create your own promise:
        -make this function return a promise that:
            +if x is less than or equal to 25, contains the first x fibonnaci numbers in an array
            -If x is more than 25, rejects.
    */
}


