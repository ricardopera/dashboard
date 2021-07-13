import "regenerator-runtime";
import $ from "jquery";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
// var tema = 'dark';
var tema = "light";

console.log('sdsadasdad')
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
// 		tema = 'dark';
//     }
//     else {        document.documentElement.setAttribute('data-theme', 'light');
//           localStorage.setItem('theme', 'light');
// 		  tema = 'light';
//     }
// 	chart1.setTheme(tema);
// 	chart2.setTheme(tema);
// 	chart3.setTheme(tema);
// 	chart4.setTheme(tema);
// 	chart5_1.setTheme(tema);
// 	chart6.setTheme(tema);
// 	chart7.setTheme(tema);
// 	chart8.setTheme(tema); 
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

// // function to set a given theme/color-scheme
// function setTheme(themeName) {
// 	localStorage.setItem('theme', themeName);
// 	document.documentElement.className = themeName;
// 	console.log(themeName);
// 	// var tem = themeName.split("-")[1];
// 	// console.log(tem);
// 	// chart1.setTheme(tem);
// 	// chart2.setTheme(tem);
// 	// chart3.setTheme(tem);
// 	// chart4.setTheme(tem);
// 	// chart5_1.setTheme(tem);
// 	// chart6.setTheme(tem);
// 	// chart7.setTheme(tem);
// 	// chart8.setTheme(tem);
// }

// function setTheme2(themeName) {
// 	localStorage.setItem('theme', themeName);
// 	document.documentElement.className = themeName;
// 	console.log(themeName);
// 	var tem = themeName.split("-")[1];
// 	console.log(tem);
// 	chart1.setTheme(tem);
// 	chart2.setTheme(tem);
// 	chart3.setTheme(tem);
// 	chart4.setTheme(tem);
// 	chart5_1.setTheme(tem);
// 	chart6.setTheme(tem);
// 	chart7.setTheme(tem);
// 	chart8.setTheme(tem);
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
// 	console.log('Olá que tal?');
// 	if (localStorage.getItem('theme') === 'theme-dark') {
// 		setTheme2('theme-light');
// 	} else {
// 		setTheme2('theme-dark');
// 	}
// }

// var theme_button = document.getElementById("switch");

// theme_button.onclick = function(){
// 	toggleTheme();
// };


// // Immediately invoked function to set the theme on initial load
// (function () {
// 	if (localStorage.getItem('theme') === 'theme-dark') {
// 		setTheme('theme-dark');
// 		tema = "dark";
// 	} else {
// 		setTheme('theme-light');
// 		tema = "light";
// 	}
// })();

// window.onload = function(e) {
//     var offset = document.getElementsByClassName('faixa-ano')[0].offsetTop;
//     var menu = document.getElementsByClassName('faixa-ano')[0];

//     document.addEventListener('scroll', function() {
//         if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
//             menu.style.position = 'fixed';
//         } else {
//             menu.style.position = 'initial';
//         }
//     });
// }

const sdk = new ChartsEmbedSDK({
	baseUrl: "https://charts.mongodb.com/charts-saude-ualvx", // Optional: ~REPLACE~ with the Base URL from your Embed Chart dialog
});

const chart1 = sdk.createChart({
	chartId: "147fe4a4-cd35-462c-aa79-8925840b30d4", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "500px",
	theme: tema
});

const chart2 = sdk.createChart({
	chartId: "e01702d3-d246-4df9-821e-091cab268832", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "500px",
	theme: tema
});

const chart3 = sdk.createChart({
	chartId: "ec432340-d756-4992-b0c4-742c3a24b437", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "300px",
	theme: tema
});

const chart4 = sdk.createChart({
	chartId: "70a55ce1-46bc-4005-8fd2-8eb2d61132c0", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "300px",
	theme: tema
});

// const chart5 = sdk.createChart({
// 	chartId: "739f10d9-1084-45e7-b32f-06fee9570ff5", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
// 	height: "500px",
// 	theme: tema
// });
const chart5_1 = sdk.createChart({
	chartId: "bcd02704-fb13-46a3-bc70-9c209af53e37", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "500px",
	theme: tema
});
const chart6 = sdk.createChart({
	chartId: "f39c46f7-16e2-4994-8141-c9111f680475", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "500px",
	theme: tema
});

const chart7 = sdk.createChart({
	chartId: "f11f894d-9040-4c20-aa30-487323217dc2", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "300px",
	theme: tema
});
const chart8 = sdk.createChart({
	chartId: "bb264786-e2df-4c17-b6e3-ff1e40b5df4a", // Optional: ~REPLACE~ with the Chart ID from your Embed Chart dialog
	height: "300px",
	theme: tema
});

const clickHandler = (payload) => {
	// Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
	const ano = document.getElementById("filtro-ano").value;
	const filter = Object.assign({},payload.selectionFilter , { "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}});
	var texto = '';
	ano ? chart2.setFilter(filter) : chart2.setFilter(payload.selectionFilter);
	ano ? texto = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])} de ${ano}`
		: texto = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])}`

	console.log(filter);
	document.getElementById("filterMessage").innerText = texto;

};

const clickHandlerCID = (payload) => {
	// Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
	chart6.setFilter(payload.selectionFilter);
	console.log(payload.selectionFilter);
	// document.getElementById(
	// 	"filterMessage"
	// 	).innerText = `processos com o CID-10 ${JSON.stringify(payload.selectionFilter["cid.codigo"])}: ${JSON.stringify(payload.selectionFilter["cid.doenca"])}`;
};

const clickHandlerANO = (payload) => {
	// Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
	chart8.setFilter(payload.selectionFilter);
	console.log(JSON.stringify(payload));
	document.getElementById(
		"filterANO"
		// ).innerText = `processos apenas de ${JSON.stringify(payload.data["x"])}`;
		).innerText = `processos apenas de ${payload.data.cell.value}`;
};

const clickHandlerANO1 = (payload) => {
	// Optional: ~REPLACE~ this with a suitable filter if you're using your own chart
	chart6.setFilter(payload.selectionFilter);
	console.log(JSON.stringify(payload));
	document.getElementById(
		"filterANO"
		// ).innerText = `processos apenas de ${JSON.stringify(payload.data["x"])}`;
		).innerText = `processos apenas de ${payload.data.cell.value}`;
};

async function renderCharts() {
    console.log('aqui @@@@@')
	await chart1.render(document.getElementById("chart1"));
	await chart2.render(document.getElementById("chart2"));
	await chart3.render(document.getElementById("chart3"));
	await chart4.render(document.getElementById("chart4"));
	// await chart5.render(document.getElementById("chart5"));
	await chart5_1.render(document.getElementById("chart5_1"));
	await chart6.render(document.getElementById("chart6"));
	await chart7.render(document.getElementById("chart7"));
	await chart8.render(document.getElementById("chart8"));
	// chart8.setTheme("dark");
	const options = { includes: [{ types: ['text'] }] };
	const options2 = { includes: [{ roles: ['mark'] }] };
	await chart1.addEventListener("click", clickHandler, options);
	// await chart5.addEventListener("click", clickHandlerCID, options);
	await chart5_1.addEventListener("click", clickHandlerANO1, options2);
	// await chart7.addEventListener("click", clickHandlerANO, options);
	$("#filtro-ano").on("change", e => {
		const ano = e.target.value;
		const dat = new Date(2008, 1, 1);
		console.log(JSON.stringify(ano));
		ano	? chart1.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart1.setFilter({});
		ano	? chart2.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart2.setFilter({});
		ano	? chart3.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart3.setFilter({});
		ano	? chart4.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart4.setFilter({});
		ano	? chart5_1.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart5_1.setFilter({});
		ano	? chart6.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart6.setFilter({});
		ano	? chart7.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart7.setFilter({});
		ano	? chart8.setFilter({ "data_distribuicao":{$gte: new Date(`${ano}-01-01T00:00:00.000Z`),$lte: new Date(`${ano}-12-31T00:00:00.000Z`)}})
			: chart8.setFilter({});
		var texto = '';
		ano
			? texto = `processos de ${ano}`
			: texto = `todos os processos`;
		document.getElementById("filterMessage").innerText = texto;
	});
}

renderCharts().catch((e) => window.alert(e.message));

export default renderCharts;
