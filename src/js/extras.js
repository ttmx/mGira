export const delay = ms => new Promise(res => setTimeout(res, ms));

export function appendElementToBodyFromHTML(htmlString) {
	// Create a string representing the element
	const elementString = htmlString;

	// Create a new DOMParser
	const parser = new DOMParser;

	// Parse the element string
	const doc = parser.parseFromString(elementString, 'text/html');

	// Access the parsed element
	const element = doc.body.firstChild;

	// Now you can manipulate or append the element to the document
	document.body.appendChild(element);
}

export function appendElementToElementFromHTML(htmlString, parentElement) {
	// Create a string representing the element
	const elementString = htmlString;

	// Create a new DOMParser
	const parser = new DOMParser;

	// Parse the element string
	const doc = parser.parseFromString(elementString, 'text/html');

	// Access the parsed element
	const element = doc.body.firstChild;

	// Now you can manipulate or append the element to the document
	parentElement.appendChild(element);
}

export function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

export function correctMinutesSeconds(i) {
	if (i < 10) {
		i = '0' + i;
	} // add zero in front of numbers < 10
	return i;
}

export function isInputElement(ele) {
	return (
		(ele && ele.tagName === 'INPUT') ||
    ele.tagName === 'TEXTAREA' ||
    ele.getAttribute('contenteditable').toString() === 'true'
	);
}