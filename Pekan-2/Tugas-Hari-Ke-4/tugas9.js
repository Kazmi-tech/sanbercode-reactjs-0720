// Soal 1
// const newFunction = function literal(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function(){
//       console.log(firstName + " " + lastName)
//       return 
//     }
//   }
// }
 

const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(firstName + " " + lastName)
      return 
    }

  }
}
//Driver Code 
newFunction("William", "Imoh").fullName() 


// Soal 2
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const  {firstName, lastName, destination, occupation} = newObject


// Driver code
console.log(firstName, lastName, destination, occupation)



// Soal 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)