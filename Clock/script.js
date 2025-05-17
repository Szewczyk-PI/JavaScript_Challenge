const secoundHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
	const now = new Date();
	const secound = now.getSeconds();
	const hour = now.getHours();
	const secoundDegrees = (secound / 60) * 360 + 90;
	secoundHand.style.transform = `rotate(${secoundDegrees}deg`;
	const minute = now.getMinutes();
	const minuteDegrees = (minute / 60) * 360 + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg`;
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg`;
};

setInterval(setDate, 1000);
