
const accountId = 1234 // can't be changed

let accountEmail = "adarsh1234" // can't declare again but you can modify
accountEmail = "adarshhh"

var accountPassword = "@123" //you can change and declare

accountCity = "Bhopal" // not best way

let accountState; //value == undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountEmail)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



