const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const zmiana = () => {
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
};

const getRandomNumber = (params) => {
	return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', zmiana);
