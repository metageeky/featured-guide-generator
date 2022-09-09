
const fg_live_observer = new MutationObserver(function() {
    if (document.getElementById('s-lg-editor-content')) {
		saveLiveVersion();
    }
});

const fg_target = document.querySelector('body');
const fg_config = { childList: true, subtree: true };

function saveLiveVersion() {
	let temp = document.querySelector('.preview').outerHTML;
	temp = temp.replace(' preview',' live');
	document.getElementById('s-lg-editor-content').value = temp;
	document.getElementById('s-lib-alert-btn-first').click();
	fg_live_observer.disconnect();
}

function checkValidity() {
	var inputs = document.querySelectorAll('.fg input');
	for(e of inputs) {
		if(!e.checkValidity()) {
			return false;
		}
	}
	return true;
}

function updatePreview() {
	let guide = document.getElementById('fg-name').value;

	let faLink = document.querySelector('.preview .featured-guide-link');
	faLink.setAttribute('href', document.getElementById('fg-url').value);
	faLink.textContent = guide;

	let faUrl = document.querySelector('.preview .featured-guide-img');
	faUrl.setAttribute('src', document.getElementById('fg-thumbnail').value);
	faUrl.setAttribute('alt','Screenshot of ' + guide + ' guide');

	document.querySelector('.preview .featured-guide-desc').textContent = document.getElementById('fg-desc').value;
}

window.addEventListener('load', function(event) {
	
	if(window.location.href.indexOf('admin_c.php') == -1)
		document.getElementById('live').setAttribute('disabled','');

	// autofill the inputs
	document.getElementById('fg-name').value = document.querySelector('.featured-guide.live .featured-guide-link').innerText;
	
	document.getElementById('fg-url').value = document.querySelector('.featured-guide.live .featured-guide-link').getAttribute('href');
	
	document.getElementById('fg-desc').value = document.querySelector('.featured-guide.live .featured-guide-desc').innerText;
	
	document.getElementById('fg-thumbnail').value = document.querySelector('.featured-guide.live .featured-guide-img').getAttribute('src');

	if(checkValidity())
		updatePreview();

	// Add events
	document.getElementById('fg-form').addEventListener('submit', function(evt) {
		 evt.preventDefault();
	});

	document.getElementById('preview').addEventListener('click', function(evt) {
		if(checkValidity())
			updatePreview();
	});

	document.getElementById('reset').addEventListener('click', function(evt) {
		let es = document.querySelectorAll('.fg input');
		for(e of es) {
			e.value = '';
		}
	});
	
	document.getElementById('live').addEventListener('click', function(evt) {
		if(!window.confirm("This will update the Featured Guide on the homepage. Are you sure?"))
			return;
	
		if(checkValidity())
			updatePreview();
		else
			return;
			
		document.querySelector('#s-lg-admin-edit-content-text-68472865 + ul li:nth-of-type(2) a').click();
		
		fg_live_observer.observe(document.body, { childList: true, subtree: true });		
	});
});
