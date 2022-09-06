function copyToClipboard() {
	// Get the text field
	var copyText = document.getElementById("html");

	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
} 

window.addEventListener('load', function(event) { 
	document.getElementById('generate').addEventListener('click', function(evt) {
		let guide = document.getElementById('name').value;
		let url = document.getElementById('url').value;
		let desc = document.getElementById('desc').value;
		let thumb = document.getElementById('thumbnail').value;
		
		let faLink = document.querySelector('.featured-guide-link');
		faLink.setAttribute('href',url);
		faLink.textContent = guide;
		
		let faUrl = document.querySelector('.featured-guide-img');
		faUrl.setAttribute('src',thumb);
		faUrl.setAttribute('alt','Screenshot of ' + guide + ' guide');
		
		document.querySelector('.featured-guide-desc').textContent = desc;
		
		document.getElementById('html').value = document.getElementById('example').innerHTML.replaceAll('\t\t\t\t','').trim();
		
		document.getElementById('output').classList.remove('hide');
	});

	document.getElementById('reset').addEventListener('click', function(evt) {
		let es = document.querySelectorAll('input, textarea');
		for(e of es) {
			e.value = '';
		}
		document.getElementById('output').classList.add('hide');
	});
	
	document.getElementById('copy').addEventListener('click', function(evt) {
		copyToClipboard();
	});
});