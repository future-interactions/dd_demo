let img = [];
let text_titles = [];
let ranNum = 0;
let table;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQumdtbxPmDzg5Kh9Jj7ULGDtgF4OFIMgtnGd6BZ2LNdWdmSgEWnkDu5_gzaDb8TfsEAB6Py58h3zYz/pub?gid=0&single=true&output=csv";
let file_name;
let title;
let item_count;
let portrait = false;
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
		img[i] = createImg(file_name[i]);
		img[i].hide();
		text_titles[i] = title[i];
	}
	textAlign(CENTER);
}

function draw() {
	background('#eee');
let perScale;
	if (img[ranNum].height > img[ranNum].width) {
		let perc1 = 100 / img[ranNum].height;
		let perc2 = perc1 * windowHeight;
		 perScale = perc2 / 115;
		// console.log("perc1 = "+perc1);
		// console.log("perc2 = "+perc2);
		// console.log("perScale = "+perScale);
	} else {
		console.log("landscape");
		let perc1 = 100 / img[ranNum].width;
		let perc2 = perc1 * windowWidth;
		perScale = perc2 /150;
	}
//	img[ranNum].resize(img[ranNum].width * perScale, img[ranNum].height * perScale);
	// image(img[ranNum], windowWidth / 2 - img[ranNum].width * perScale / 2, windowHeight / 2 - img[ranNum].height * perScale / 2, img[ranNum].width * perScale, img[ranNum].height * perScale);
	image(img[ranNum], windowWidth / 2 - (img[ranNum].width*perScale) / 2, windowHeight / 2 - (img[ranNum].height*perScale) / 2, img[ranNum].width*perScale , img[ranNum].height*perScale );

	text(text_titles[ranNum], width / 2, 30);
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

function addComment() {

}