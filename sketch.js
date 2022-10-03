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
	//	img[i] = loadImage("artworks/" + file_name[i] + ".jpg");
	img[i] = loadImage(file_name[i]);
console.log(img);
		text_titles[i] = title[i];
	}
	textAlign(CENTER);
}

function draw() {
	background('#eee');
	let scaler = 0.75;
	image(img[ranNum], windowWidth/2-img[ranNum].width*scaler/2, windowHeight/2-img[ranNum].height*scaler/2,img[ranNum].width*scaler,img[ranNum].height*scaler);
	text(text_titles[ranNum], width/2, 30);
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	ranNum = int(random(item_count));
	}
}

function mousePressed() {
	ranNum = int(random(item_count));
	//saveCanvas('myCanvas', 'png');
}

function addComment(){

}