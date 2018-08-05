
let keys = document.querySelectorAll('.key');
let key = document.querySelector('.key');

keys.forEach(function(key){
	key.addEventListener('click', function(e){
		let name = this.querySelector('.sound').innerText.toLowerCase();
		createSound(name);
	})
	
})

function createSound(audioName){
	let sound = new Audio('sounds/' + audioName + '.wav');
	sound.volume = .2;
	sound.play();
}

document.body.addEventListener('keydown', function(e){
	
	keys.forEach(function(key){
		const keyAttr = key.getAttribute('data-key');
		let soundName = key.querySelector('.sound').innerText.toLowerCase();
		if (e.keyCode == keyAttr) {
			createSound(soundName );
		}
	})
	
})