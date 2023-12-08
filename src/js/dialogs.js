// Custom styled alert with OK option
export function createCustomAlert(message) {
	if (document.getElementById('modalContainer')) return;

	const mObj = document.createElement('div');
	mObj.id = 'modalContainer';

	const alertObj = mObj.appendChild(document.createElement('div'));
	alertObj.id = 'alertBox';

	const msg = alertObj.appendChild(document.createElement('p'));
	msg.innerHTML = message;

	const btn = alertObj.appendChild(document.createElement('div'));
	btn.id = 'closeBtn';
	btn.appendChild(document.createTextNode('OK'));
	//btn.focus();
	btn.addEventListener('click', () => {
		document.getElementById('modalContainer').remove();
	});

	document.body.appendChild(mObj);
}

export function createCustomYesNoPrompt(message, yesHandler, noHandler) {
	if (document.getElementById('modalContainer')) return;

	const mObj = document.createElement('div');
	mObj.id = 'modalContainer';

	const alertObj = mObj.appendChild(document.createElement('div'));
	alertObj.id = 'alertBox';

	const msg = alertObj.appendChild(document.createElement('p'));
	msg.innerHTML = message;

	let btn = alertObj.appendChild(document.createElement('div'));
	btn.id = 'yesBtn';
	btn.appendChild(document.createTextNode('Sim'));
	btn.addEventListener('click', () => {
		yesHandler();
		document.getElementById('modalContainer').remove();
	});

	btn = alertObj.appendChild(document.createElement('div'));
	btn.id = 'noBtn';
	btn.appendChild(document.createTextNode('Não'));
	btn.addEventListener('click', () => {
		noHandler();
		document.getElementById('modalContainer').remove();
	});

	document.body.appendChild(mObj);
}

export function createCustomTextPrompt(message, yesHandler, noHandler) {
	if (document.getElementById('modalContainer')) return;

	const mObj = document.createElement('div');
	mObj.id = 'modalContainer';

	const alertObj = mObj.appendChild(document.createElement('div'));
	alertObj.id = 'alertBox';

	const input = alertObj.appendChild(document.createElement('input'));
	input.id = 'customTextPromptInput';
	input.placeholder = message;

	let btn = alertObj.appendChild(document.createElement('div'));
	btn.id = 'yesBtn';
	btn.appendChild(document.createTextNode('Enviar'));
	btn.addEventListener('click', () => {
		yesHandler();
		document.getElementById('modalContainer').remove();
	});

	btn = alertObj.appendChild(document.createElement('div'));
	btn.id = 'noBtn';
	btn.appendChild(document.createTextNode('Ignorar'));
	btn.addEventListener('click', () => {
		noHandler();
		document.getElementById('modalContainer').remove();
	});

	document.body.appendChild(mObj);
}