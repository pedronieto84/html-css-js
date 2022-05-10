


const people = 100

for (let index = 0; index < people; index++){
    ageFunction(index)
}

function ageFunction(age){
    if (age >= 65)
        console.log("retiree")
    else if (age < 18)
        console.log("minor")
    else
        console.log("working age")
    }
