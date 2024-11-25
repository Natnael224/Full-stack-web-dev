// first task//
let Book = {
    title : 'Fiker Eske Mekabir',
    author : 'Hadis Alemayehu',
    pages : 553,
}
console.log('title :'+Book.title);  
console.log('pages :'+Book.pages);
//second task//
let array= ['Green', 'White', 'Orange', 'Black', 'Red'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//Third task//
let Person = {
    name :'Student Name',
    age : 28,
    isStudent : true,
}
Person.age = Person.age+1;
console.log('Unchanged properties ');
console.log(Person);
console.log('Age added by one '+Person.age);
Person.isStudent = false;
console.log('boolean changed to false '+Person.isStudent);
// Fourth task// 
let temperature = 25;  
let weather = "sunny"; 
if (temperature > 20 && weather === "sunny") { 
    console.log('It is warm and sunny!')
}
else if (temperature <= 20 && weather === "rainy") { 
    console.log("It's cold and rainy!"); 
} else { 
    console.log("It's just another day."); 
}