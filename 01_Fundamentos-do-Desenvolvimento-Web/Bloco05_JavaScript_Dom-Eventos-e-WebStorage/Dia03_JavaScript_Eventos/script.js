const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*******1*******/
function techElement(evento) {
  const tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  evento.target.classList.add('tech');
}

/*******2*******/
addEventListener('input', inputText);

function inputText(evento1) {
  const tech = document.querySelector('.tech');
  tech.innerText = evento1.target.value;
}

/*******3*******/
addEventListener('dblclick', newPage);

function newPage(evento2) {
  window.location.assign('https://g-alves1.github.io/');
}

/*******4*******/
addEventListener('mouseover', mouseOver);
addEventListener('mouseout', mouseOut);

function mouseOver(evento3) {
  evento3.target.style.color = 'red';
}

function mouseOut(evento4) {
  evento4.target.style.color = 'white';
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.