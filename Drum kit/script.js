const playSound = (e) => {
	const audio = document.querySelector(`audio[data-key="${e.key}"`);
	const key = document.querySelector(`.key[data-key="${e.key}"`);
	//consolea.log(audio);
	if (!audio) return;
	audio.curentTime = 0;
	audio.play();
	key.classList.add('playing');
};

const removeTransition = (e) => {
	if (e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
