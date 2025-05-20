const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const cities = [];
fetch(endpoint)
	.then((blob) => blob.json())
	.then((data) => cities.push(...data));

const find = (word, cities) => {
	return cities.filter((place) => {
		const regex = new RegExp(word, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
};

function numbersWith(x) {
	return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

function display() {
	const match = find(this.value, cities);
	const html = match
		.map((place) => {
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(
				regex,
				`<span class="hl">${this.value}</span `
			);
			const stateName = place.state.replace(
				regex,
				`<span class="hl">${this.value}</span `
			);
			return `<li> 
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numbersWith(place.population)}</span>
        </li>  `;
		})
		.join('');
	suggestions.innerHTML = html;
}

search.addEventListener('change', display);
search.addEventListener('keyup', display);
