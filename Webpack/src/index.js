import cat from '../images/image.jpg';
import imgSvg from '../images/1472554192.svg';

class Game {
  name = 'ROV';
}
const myGame = new Game();
const p = document.createElement('p');
p.textContent = `I like ${myGame.name}`;

const heading = document.createElement('h1'); // <h1></h1>
heading.textContent = 'Interesting!'; // <h1>Interesting</h1>

const img = document.createElement('img');
img.src = cat;
img.style = 'width:500px';

const img1 = document.getElementById('myImg');
img1.src = imgSvg;

const app = document.querySelector('#root'); // <div id='root'></div>
app.append(heading, p, img); //<div id='root'><h1>Interesting</h1> </div>
