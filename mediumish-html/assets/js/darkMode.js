const btnSwitch = document.querySelector('#idswitch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	//Guardamos en el modo local storage
	let estado = document.body.classList.contains('dark')
	if(estado) {
		localStorage.setItem('dark-mode', estado);
	} else {
		localStorage.setItem('dark-mode', estado)
	}
})

//obtenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark');
	btnSwitch.classList.add('active')
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active')
}