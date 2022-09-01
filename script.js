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
	});

});