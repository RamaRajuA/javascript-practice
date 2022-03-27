console.log('loaded');
function changeText() {
    console.log('from function');
    document.getElementById('contentChange').innerText = "Content Changed after page load";
    const newElement = document.createElement('span');
    newElement.innerHTML = ' text from JS';
    document.getElementById('contentChange').appendChild(newElement);
}