const themes = [
	{
		name: "plain",
		fontFamily: "Times New Roman, serif",
		boxBackground: "rgba(255, 255, 255, 1)",
		accentColor: "#00ab44",
		backgroundColor: "black",
		titleTextColor: "black",
		sectionHeaderTextColor: "#00ab44",
		textColor: "black",
	},
	{
		name: "space",
		fontFamily: "Zen Dots, sans-serif",
		boxBackground: "rgba(0, 0, 0, 0.4)",
		accentColor: "#6cf",
		backgroundColor: "black",
		titleTextColor: "#ff58ba",
		sectionHeaderTextColor: "#ff58ba",
		textColor: "#e0e0e0",
	},
	{
		name: "spooky",
		fontFamily: 'Silkscreen, "Press Start 2P", sans-serif',
		boxBackground: "rgba(0, 0, 0, 0.8)",
		accentColor: "#e60000",
		backgroundColor: "black",
		titleTextColor: "#e60000",
		sectionHeaderTextColor: "#e60000",
		textColor: "#e0e0e0",
	},
];
let currentThemeIndex = 0;
const header_images = document.getElementsByClassName("header-img");
const header_texts = document.getElementsByClassName("header-text");
const sections = document.getElementsByClassName("section");
const section_header_texts = document.getElementsByClassName("section-header-text");
const section_header_images = document.getElementsByClassName("section-header-img");
const footer_images = document.getElementsByClassName("footer-img");
const body = document.getElementsByTagName("body");
const container = document.getElementsByClassName("container");
const header = document.getElementsByClassName("header");

const theme_buttons = document.getElementsByClassName("theme-button");
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

	container[0].style.fontFamily = themes[currentThemeIndex].fontFamily;

	body[0].style.color = themes[currentThemeIndex].textColor;
	container[0].style.background = themes[currentThemeIndex].boxBackground;
	container[0].style.borderColor = themes[currentThemeIndex].accentColor;
	container[0].style.boxShadow = `0 0 30px ${themes[currentThemeIndex].accentColor}`;

	for (let i = 0; i < theme_buttons.length; i++) {
		theme_buttons[i].style.fontFamily = themes[currentThemeIndex].fontFamily;
		theme_buttons[i].style.color = themes[currentThemeIndex].accentColor;
		theme_buttons[i].style.background = themes[currentThemeIndex].boxBackground;
		theme_buttons[i].style.borderColor = themes[currentThemeIndex].accentColor;
		theme_buttons[i].style.boxShadow = `0 0 30px ${themes[currentThemeIndex].accentColor}`;
	}

	for (let i = 0; i < header_texts.length; i++) {
		header_texts[i].style.color = themes[currentThemeIndex].titleTextColor;
	}

	for (let i = 0; i < section_header_texts.length; i++) {
		section_header_texts[i].style.color =
			themes[currentThemeIndex].sectionHeaderTextColor;
	}

	for (let i = 0; i < sections.length; i++) {
		sections[i].style.borderColor = themes[currentThemeIndex].accentColor;
	}

	if (themes[currentThemeIndex].name === "plain") {
		body[0].style.background = themes[currentThemeIndex].backgroundColor;
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
		body[0].style.background = `${themes[currentThemeIndex].backgroundColor} url("./assets/themes/${themes[currentThemeIndex].name}/background-img.jpg") repeat`;
		for (let i = 0; i < header_images.length; i++) {
			header_images[i].style.visibility = "visible";
			header_images[i].src =
				`./assets/themes/${themes[currentThemeIndex].name}/header-img.gif`;
		}
		for (let i = 0; i < section_header_images.length; i++) {
			section_header_images[i].style.visibility = "visible";
			section_header_images[i].src =
				`./assets/themes/${themes[currentThemeIndex].name}/section-header-img.gif`;
		}
		for (let i = 0; i < footer_images.length; i++) {
			footer_images[i].style.visibility = "visible";
			footer_images[i].src =
				`./assets/themes/${themes[currentThemeIndex].name}/footer-img.gif`;
		}
	}
};
