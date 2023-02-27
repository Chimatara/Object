// QUESTION 3

      //    (a)

function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location
  }
}

const person = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State')
console.log(person);


        //      (b)

function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk
    }
}

const scores = createJambScores(70, 85, 82, 94);

// Adding this object to the object created in (a) above

person.scores = scores;

console.log(person);


//QUESTION 4

// There are two different ways to clone an Object, Namely;

// 1. Using Object.assign() example;

const myInfo = {
    name: 'Chimatara Kalu',
    level: '400 Level',
    state: 'Abia State'
}
console.log(myInfo)
// I WILL USE THE ASSIGN METHOD TO UPDATE MY INFO AFTER BECOMING A GRADUATE

const updatedInfo = Object.assign({}, myInfo)
updatedInfo.level = 'Graduate';
console.log(updatedInfo);


// 2. Using the Spread Syntax (...)  example,

const anotherInfo = {...myInfo}
anotherInfo.state = 'Lagos State'
console.log(anotherInfo)