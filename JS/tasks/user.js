class user{
    client(firstname, lastname, age, gender){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.gender = gender
    }
}
function printfullname(user){
    console.log(`user's first name ${user.firstname} and last name ${user.lastname}`)
}
function printageandgender(user){
    console.log(`user's age ${user.age} and gender ${user.gender}`)
}
export default user