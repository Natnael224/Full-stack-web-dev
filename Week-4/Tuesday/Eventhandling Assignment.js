const button = document.getElementById('myButton');
button.addEventListener('mousedown',
    function() {
        button.style.backgroundColor = 'black';
});
button.addEventListener('mouseup',
    function() {
        button.style.backgroundColor = 'greenyellow';
});
const imageIds = ['image1', 'image2', 'image3', 'image4'];
function zoomIn(event) {
    event.target.style.transform = 'scale(1.2)';
}
function zoomOut(event) {
    event.target.style.transform = 'scale(1)';
}
function updateMousePosition(event) {
    const mousePosition = document.getElementById('mousePosition');
    mousePosition.textContent = 'Mouse Position: X: ${event.clientX}, Y: ${event.clientY}';
}
imageIds.forEach(id => {
    const image = document.getElementById(id);
    image.addEventListener('mouseover', zoomIn);
    image.addEventListener('mouseout', zoomOut);
    image.addEventListener('mousemove', updateMousePosition);
});
document.addEventListener('mousemove', updateMousePosition);