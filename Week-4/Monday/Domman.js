// Create a new div element with red background and creat image element with source link then append the element to the div then the div to the body
const newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'red';
const newImg = document.createElement('img');
newImg.src = 'https://magzhouse.com/wp-content/uploads/2020/04/Gorgeous-Luxury-Modern-Furniture-For-Living-Room-01-1.png';
newDiv.appendChild(newImg);
document.body.appendChild(newDiv);
// Add the 'center' class to the div and img tags and appending both
newDiv.classList.add('center');
newImg.classList.add('center');
newDiv.appendChild(newImg);
document.body.appendChild(newDiv);
// Create a new h1 element with h1 attribute and appending it to the body
const newH1 = document.createElement('h1'); 
newH1.title = 'hi everyone'; 
newH1.textContent = 'hi everyone'; 
document.body.appendChild(newH1);
// Add a p tag with a span inside
const p = document.createElement('p');
p.style.backgroundColor = 'red';
p.style.color = 'white';
var span = document.createElement('span');
var strong = document.createElement('strong');
strong.innerText = 'this is a very strong text';
span.appendChild(strong);
p.appendChild(span);
document.body.appendChild(p);
// Create a div with 3 span children
var parentDiv = document.createElement('div');
for (var i = 1; i <= 3; i++) {
    var spanChild = document.createElement('span');
    spanChild.id = 'span' + i;
    spanChild.innerText = 'span tag';
    spanChild.style.color = 'red';
    parentDiv.appendChild(spanChild);
}
// Remove the 2nd span tag
var span2 = document.getElementById('span2');
parentDiv.removeChild(span2);
document.body.appendChild(parentDiv);
