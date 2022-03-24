const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello people");
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});