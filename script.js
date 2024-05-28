//your JS code here. If required.
function getDOMLevel(element) {
	let level= 0;
	while (element) {
		level++;
		element = element.parentElement;
	}
	return level;
}
 const targetElement = document.getElementById('level');

const domLevel = getDOMLevel(targetElement);

alert('The level of the element is:${domLevel}');
