import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

class Mouse {
  x;
  y;

  constructor(event) {
    this.x = event.x;
    this.y = event.y;
  }

}

class Circle {
  x;
  y;
  dx;
  dy;
  radius;
  maxRadius = 15;
  minRadius;
  toolbar = 64;
  context;
  color;

  colorArray = [
    'rgba(244,111,94,0.4)',
    'rgba(248,146,132,0.4)',
    'rgba(249,179,170,0.4)',
    'rgba(239,83,80,0.4)',
    'rgba(252,242,240,0.4)'
  ];

  constructor(context, x, y, dx, dy) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = Math.random() * 3 + 1;
    this.minRadius = this.radius;
    this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
  }

  public draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
  }

  public update(mouse: Mouse) {
    if (this.x + this.radius > innerWidth
      || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius + this.toolbar > innerHeight
      || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();

    //interactivity 
    if (mouse) {
      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 && mouse.y - this.y > -50
      ) {
        if (this.radius < this.maxRadius) {
          this.radius += 1;
        }
      }
      else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
    }
  }
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  toolbar = 64;
  circleArray = [];

  constructor() { }

  @ViewChild('myCanvas') myCanvas: ElementRef;

  context: CanvasRenderingContext2D;

  obj;
  mouse: Mouse;

  public getHeight = () => {
    var pageHeight = 0;

    function findHighestNode(nodesList) {
      for (var i = nodesList.length - 1; i >= 0; i--) {
        if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
          var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);
          pageHeight = Math.max(elHeight, pageHeight);
        }
        if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);
      }
    }

    findHighestNode(document.documentElement.childNodes);

    return pageHeight;
  };


  public ngAfterViewInit() {

    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = this.getHeight() - this.toolbar;

    this.context = this.myCanvas.nativeElement.getContext("2d");

    window.addEventListener('mousemove',
      (event) => {
        this.mouse = new Mouse(event);
      });

    window.addEventListener('resize',
      () => {
        canvas.width = window.innerWidth;
        canvas.height = this.getHeight() - this.toolbar;
      });





    // window.addEventListener('touchstart',
    // (event) => {
    //   this.mouse = new Mouse(event);
    // });

    // window.addEventListener('touchend',
    // (event) => {
    //   delete this.mouse;
    // });


    this.animate();
    this.init();
  }

  public animate = () => {
    this.context.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < this.circleArray.length; i++) {
      this.circleArray[i].update(this.mouse);
    }
    requestAnimationFrame(this.animate);

  }

  public init = () => {
    for (var i = 0; i < 400; i++) {
      var radius = 30;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - (radius + 2 *this.toolbar) * 2) + (radius + this.toolbar);
      var dx = (Math.random() - 0.5);
      var dy = (Math.random() - 0.5);
      this.circleArray.push(new Circle(this.context, x, y, dx, dy));
    }
  }

  ngOnInit() {
  }

}
