let btnAdd = document.querySelector('#btn');
let table = document.querySelector('table');

let idInput = document.querySelector('#id');
let nameInput = document.querySelector('#name');
let cityInput = document.querySelector('#city');
let dateInput = document.querySelector('#date');
let statusInput = document.querySelector('#status');
let cashInput = document.querySelector('#cash');


btnAdd.addEventListener('click', () => {
	let id = idInput.value;
	let name = nameInput.value;
	let city = cityInput.value;
	let date = dateInput.value;
	let status = statusInput.value;
	let cash = cashInput.value;

	let template = `
							<tr>
							<td>${id}</td>
							<td>${name}</td>
							<td>${city}</td>
							<td>${date}</td>
							<td>${status}</td>
							<td>${cash}</td>
							</tr>`;

	table.innerHTML += template;
})
