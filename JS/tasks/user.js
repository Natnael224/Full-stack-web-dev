export const pi = 3.14159;
export const e = 2.71828; //trials for importing
export function createUser(name, age, occupation) {
    // Generate a random amount of money between $0 and $50,000
    const randomMoney = Math.floor(Math.random() * 50000);
    // Create the user object
    const user = {
        name: name,
        money: randomMoney,
        Age: age,
        Occupation: occupation,
    };

    return user;
}
