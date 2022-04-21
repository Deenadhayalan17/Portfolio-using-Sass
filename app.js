const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// add click event on toggle
toggle.addEventListener('click', () => {
	console.log("clicked")
	ul.classList.toggle('nav__active');
});
//name effect
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText = "Deenadhayalan D"
let start = 0;

const typeWrite = () => {
    if(start < nameText.length) {
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 300);
	}
}
typeWrite();