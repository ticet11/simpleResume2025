const themes = ["space", "spooky"];
const fonts = { space: "Zen Dots, sans-seriff", spooky: "UnifrakturMaguntia, cursive" };
let currentThemeIndex = 0;
const header_images = document.getElementsByClassName("header-img");
const section_header_images = document.getElementsByClassName("section-header-img");
const footer_images = document.getElementsByClassName("footer-img");
const body = document.getElementsByTagName("body");
const themeChanger = () => {
	currentThemeIndex = (currentThemeIndex + 1) % themes.length;
	console.log(currentThemeIndex);

	const theme_key = themes[currentThemeIndex];
	for (let i = 0; i < header_images.length; i++) {
		header_images[i].src = `./assets/themes/${theme_key}/header-img.gif`;
	}
	for (let i = 0; i < section_header_images.length; i++) {
		section_header_images[i].src = `./assets/themes/${theme_key}/section-header-img.gif`;
	}
	for (let i = 0; i < footer_images.length; i++) {
		footer_images[i].src = `./assets/themes/${theme_key}/footer-img.gif`;
	}
	for (let i = 0; i < body.length; i++) {
		body[i].style.backgroundImage = `url("./assets/themes/${theme_key}/background-img.jpg")`;
		body[i].style.fontFamily = fonts[theme_key];
	}
};
