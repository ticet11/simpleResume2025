const themes = ["space", "spooky", "plain"];
const fonts = {
	space: "Zen Dots, sans-seriff",
	spooky: "UnifrakturMaguntia, cursive",
	plain: "Arial, sans-serif",
};
let currentThemeIndex = 0;
const header_images = document.getElementsByClassName("header-img");
const section_header_images = document.getElementsByClassName("section-header-img");
const footer_images = document.getElementsByClassName("footer-img");
const body = document.getElementsByTagName("body");
const container = document.getElementsByClassName("container");
const header = document.getElementsByClassName("header");
const themeChanger = (direction) => {
	if (direction === "left") {
		if (currentThemeIndex === 0) {
			currentThemeIndex = themes.length - 1;
		} else {
			currentThemeIndex = (currentThemeIndex - 1) % themes.length;
		}
	} else if (direction === "right") {
		currentThemeIndex = (currentThemeIndex + 1) % themes.length;
	}
	console.log(currentThemeIndex);
	console.log(header);

	const theme_key = themes[currentThemeIndex];
	if (theme_key === "plain") {
		body[0].style.backgroundImage = "none";
		body[0].style.fontFamily = fonts[theme_key];
		container[0].style.background = "#f4f4f4";
		container[0].style.color = "#000000";
		header[0].style.color = "#333";
		for (let i = 0; i < header_images.length; i++) {
			header_images[i].style.visibility = "hidden";
		}
		for (let i = 0; i < section_header_images.length; i++) {
			section_header_images[i].style.visibility = "hidden";
		}
		for (let i = 0; i < footer_images.length; i++) {
			footer_images[i].style.visibility = "hidden";
		}
	} else {
		body[0].style.backgroundImage = `url("./assets/themes/${theme_key}/background-img.jpg")`;
		body[0].style.fontFamily = fonts[theme_key];
		container[0].style.background = "#140101";
		container[0].style.color = "#f4f4f4";
		header[0].style.color = "#e9e9e9";
		for (let i = 0; i < header_images.length; i++) {
			header_images[i].style.visibility = "visible";
			header_images[i].src = `./assets/themes/${theme_key}/header-img.gif`;
		}
		for (let i = 0; i < section_header_images.length; i++) {
			section_header_images[i].style.visibility = "visible";
			section_header_images[i].src = `./assets/themes/${theme_key}/section-header-img.gif`;
		}
		for (let i = 0; i < footer_images.length; i++) {
			footer_images[i].style.visibility = "visible";
			footer_images[i].src = `./assets/themes/${theme_key}/footer-img.gif`;
		}
	}
};
