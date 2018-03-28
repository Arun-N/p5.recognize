# p5.recognize


p5.recognize is a library for p5.js which allows mouse click event to be detected when inside the bounds of a primitive p5 shape. It returns a string value according to the shape on which the mouse click event was registered.

  

Currently supported shapes:

* Square

* Rectangle

* Triangle

* Circle

* Ellipse

  

## Getting Started

  

Get the p5.recognize.js file from the library folder and add it to your project by linking it with the HTML file as shown <a  href="https://p5js.org/libraries/">here</a>

  

If you want to run an example implementation, use the provided sketch.js and index.html files along with libraries folder
OR
run the example in <a  href="https://plnkr.co/edit/gUS03W?p=info">plunker</a>

## Usage

p5.recognize.js provides the following functions:

```
* createEllipse(x, y, width, height, color)
* createRect(x, y, width, height, color)
* createTriangle(x1, y1, x2, y2, x3, y3, color)
* display()
* findShapeType(mouseX, mouseY)
```

The <b>createEllipse(), createRect() and createTriangle()</b> are to be used in the <b>setup()</b> function of p5. The color parameter should be a string in RGB format.

The <b>display()</b> function is used inside <b>draw()</b> function of p5 to render the above shapes.

The <b>findShapeType()</b> function is to be used inside <b>mousePressed()</b> event function of p5. It has to be supplied with the mouseX and mouseY coordinates and it returns a string value.

Example code:

```javascript
var  shapeType;

function  setup() {
	createCanvas(windowWidth, windowHeight);
	createEllipse(100, 100, 40, 40, "rgb(66, 134, 244)");
	createRect(300, 300, 100, 200, "rgb(66, 134, 244)");
	createEllipse(200, 500, 100, 75, "rgb(255, 0, 0)");
	createTriangle(30, 100, 58, 20, 86, 75, "rgb(0, 255, 0)");
}

function  draw() {
	display();
}

function  mousePressed() {
	shapeType  =  findShapeType(mouseX, mouseY);
	alert(shapeType);
}
```


## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details