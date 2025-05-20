const panels = document.querySelectorAll('.panel');

function toggleOn() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	console.log(e.propertyName);
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach((panel) => panel.addEventListener('click', toggleOn));
panels.forEach((panel) =>
	panel.addEventListener('transitionend', toggleActive)
);
