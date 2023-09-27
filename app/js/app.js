// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	let toggle = document.querySelector(".menu-btn");
	toggle.addEventListener("click", function (e) {
	let body = document.querySelector("body");
	body.classList.toggle("opened");
});
})
