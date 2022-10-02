let img = [];
let text_titles = [];
let ranNum = 0;
let table;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQumdtbxPmDzg5Kh9Jj7ULGDtgF4OFIMgtnGd6BZ2LNdWdmSgEWnkDu5_gzaDb8TfsEAB6Py58h3zYz/pub?gid=0&single=true&output=csv";
let file_name;
let title;
let item_count;
// let url = "assets/NG_Stories_Digital_Dossier_Demo_db - Sheet1.csv";

function preload() {
	table = loadTable(url, 'csv', 'header');
}

function setup() {
	item_count = table.getRowCount();
	console.log("item_count = " + item_count);
	//console.log(table.getColumnCount() + ' total columns in table');
	file_name = table.getColumn('file_name');
	title = table.getColumn('title');
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < item_count; i++) {
		img[i] = loadImage("artworks/" + file_name[i] + ".jpg");
		text_titles[i] = title[i];
	}
}

function draw() {
	background(255);
	image(img[ranNum], 0, 0);
	text(text_titles[ranNum], 10, 30);
}

function keyPressed() {
	ranNum = int(random(item_count));
	//console.log(ranNum);
}

