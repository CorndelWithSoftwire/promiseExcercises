module.exports = {
    getPersonData: getPersonData,
    getLanguages: getLanguages,
    getAllPeople: getAllPeople,
    getPostcode: getPostcode,
}

function getAllPeople(){
    return ["Josh", "James", "Gareth", "Dom", "Phil"];
}

function getPostcode(person){
    switch(person.location){
        case "London":
            return "NW5 1TL";
        case "Cambridge":
            return "CB4 0GA";
        default:
            throw {erorr: "Not a valid office", personName: person.name};        
            
    }
}

function getPersonData(name){
    let data = null;
    switch(name){
        case "Josh": 
            data = {
                awesomeness: 10,
                programmingAbility: 6,
                location: "London",
                name: "Josh",
            };
            break;
        case "James":
            data = {
                awesomeness: 10,
                programmingAbility: 9,
                location: "London",
                name: "James",
            };
            break;
        case "Gareth":
            data = {
                awesomeness: 10,
                programmingAbility: -2,
                location: "Cambridge",
                name: "Gareth",
            }
            break;
        case "Dom":
            data = {
                awesomeness: 12,
                programmingAbility: 0,
                location: "London",
                name: "Dom",
            }
            break;
        case "Phil":
            data = {
                awesomeness: -1,
                programmingAbility: -1,
                location: "upstairs",
                name: "Phil",
            }
    }

        const prom = new Promise((res, rej) => {
            setTimeout(() => {
                if(data != null){
                    res(data)
                } else {
                    rej("No such person")
                }
            }, 500)
        })
    return prom;
}

function getLanguages(skill){
    const data = ["javascript", "html", "css", "C#", "C++", "C", "python", "Lua", "Kotlin", "Swift"];
    const limitedData = data.slice(0,skill);
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            res(limitedData);
        }, 500)
    })
    return prom;
}