import IMG from '../images/lego.jpg';
const img = document.createElement('img');
img.src = IMG;

const app = document.getElementById('root');
app.prepend(img);
