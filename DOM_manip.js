const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.cssText = 'color: red';
para.textContent = 'Hey I\'m red!';

container.appendChild(para);

const H3 = document.createElement('h3');
H3.style.cssText = 'color: blue';
H3.textContent = 'I\'m a blue h3';

container.appendChild(H3);

const div = document.createElement('div');
div.style.cssText = 'border: 4px solid black; background : pink;';

container.appendChild(div);

const framedH1 = document.createElement('h1');
framedH1.textContent = "I'm in a div";
const framedP1 = document.createElement('p');
framedP1.textContent = 'Me too!';

div.appendChild(framedH1);
div.appendChild(framedP1);
