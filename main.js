// Copyright 2021 Jamie Murphy

/**
 * Creates a new event handler for an element
 * @param element Element to add event handler to
 * @param eventName Name of event to handle
 * @param cb Callback to run on event
**/
function addEvent(element, eventName, cb) {
	if (element.addEventListener) {
		element.addEventListener(eventName, cb, false)
	} else if (element.attachEvent) {
		element.attachEvent("on" + eventName, cb)
	} else {
		element["on" + eventName] = callback
	}
}

// Detect F1, Del, and F + 1 keyboard presses
let keys = {}
// Let's handle F + 1 at the same time
onkeydown = onkeyup = function (e) {
	e = e || window.event
	keys[e.keyCode] = e.type == 'keydown'
	if (keys[70] && keys[49]) {
		document.getElementById('youfoundit').style.display = 'block'
		const DURATION = 8000, LENGTH = 100;

  		new Confetti({
    		width    : window.innerWidth,
    		height   : window.innerHeight,
    		length   : LENGTH,
    		duration : DURATION
  		});
	}
}
