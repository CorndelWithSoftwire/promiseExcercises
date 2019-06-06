# Excercise
In the `src/tests.js` file there are a number of excercises with instructions in.
They will require you to use the SoftwireStaff module, which has been imported for you.
The documentation is below, do not look at the code! It might spoil the excercises.
before running for the first time you'll need to run `npm install`
When you think you have a correct answer, for a test run `npm test` to run the test suite against your answers




# Documentation for SoftwireStaff module

## Getting a list of people

use `softwireStaff.getAllPeople()` to get a list of all staff members. This will return an array of strings, which are the staff members names.

## Getting person data

use `softwireStaff.getPersonData(name)` to get the information for a specific staff member.
This will return a promise, containing the data in the following format:
```javascript
{
    name: 'John',
    awesomeness: 0,
    programmingAbility: 4,
    location: 'London'
}
```
It will take half a second to load.
If the staff member is not in the records, it will reject with the error message `"No such person"`


## Getting a postcode of a location

use `softwireStaff.getPostcode(person)` to find the postcode for the office where an employee works. This will return a string containing the postcode.
If `person.location` is not a valid softwire office, it will throw an error with the format:
`{ error: 'Not a valid office', personName: person.name}`

## Getting coding skill

We use a tiered list of coding languages, in an array, from easiest to hardest. To get an employees languages they can use, pass in their `programmingAbility` 
property into `softwireStaff.getLanguages(ability)`.
It will return a promise, containing an array of strings represnting the languages to use.