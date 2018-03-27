var shapeType;

function setup() {
	createCanvas(windowWidth, windowHeight);
	createEllipse(100, 100, 40, 40, "rgb(66, 134, 244)");
	createRect(300, 300, 100, 200, "rgb(66, 134, 244)");
	createEllipse(200, 500, 100, 75, "rgb(255, 0, 0)");
	createTriangle(30, 75, 58, 20, 86, 75, "rgb(0, 255, 0)");
}

function draw() {
	display();
}

function mousePressed() {
	shapeType = findShapeType(mouseX, mouseY);
	console.log(shapeType);
}