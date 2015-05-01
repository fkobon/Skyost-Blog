var elements = document.getElementsByTagName('script');
var icon = document.getElementById('footer-icon');
var header = document.getElementById('site-header');

Array.prototype.forEach.call(elements, function(element) {
	if(element.type.indexOf('math/tex') != -1) {
		 var textToRender = element.innerText || element.textContent; // Extract math markdown.
		 var katexElement = document.createElement('span'); // Create span for KaTeX.
		 if(element.type.indexOf('mode=display') != -1){ // Support inline and display math
			katexElement.className += "math-display";
			textToRender = '\\displaystyle {' + textToRender + '}';
		 }
		 else {
			katexElement.className += "math-inline";
		 }
		 katex.render(textToRender, katexElement);
		 element.parentNode.insertBefore(katexElement, element);
	}
});

if(typeof icon !== 'undefined') {
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	switch(getRandomInt(0, 5)) {
		case 0:
			icon.style.color = '#e74c3c';
			icon.className = 'fa fa-heart';
			break;
		case 1:
			icon.style.color = '#2980b9';
			icon.className = 'fa fa-smile-o';
			break;
		case 2:
			icon.style.color = '#7f8c8d';
			icon.className = 'fa fa-paper-plane';
			break;
		case 3:
			icon.style.color = '#2c3e50';
			icon.className = 'fa fa-futbol-o';
			break;
		case 4:
			icon.style.color = '#27ae60';
			icon.className = 'fa fa-rocket';
			break;
	}
	
	new Elevator({
		element: icon,
		mainAudio: '/music/elevator-music.mp3', // Music from http://www.bensound.com/
		endAudio:  '/music/ding.mp3'
	});
}

if(typeof header !== 'undefined') {
	var HttpClient = function() {
		this.get = function(url, callback) {
			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function() {
				if(httpRequest.readyState == 4 && httpRequest.status == 200) {
					callback(httpRequest.responseText);
				}
			}
			httpRequest.open('GET', url, true);            
			httpRequest.send(null);
		}
	}
	new HttpClient().get('http://image-a-day.herokuapp.com/image', function(response) {
		header.style.backgroundImage = 'url(\'' + JSON.parse(response).imageUrl + '\')';
	});	
}