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
  toolbar = 64;
  context;

  constructor(context, x, y, dx, dy, radius) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }



  public draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.strokeStyle = 'blue';
    this.context.stroke();
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
        this.radius += 1;
      }
      else if(this.radius > 2){
        this.radius -= 1;
      }
    }
  }
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toolbar = 64;
  circleArray = [];

  constructor() { }

  @ViewChild('myCanvas') myCanvas: ElementRef;




  context: CanvasRenderingContext2D;

  obj;
  mouse: Mouse;




  public ngAfterViewInit() {

    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - this.toolbar;

    this.context = this.myCanvas.nativeElement.getContext("2d");


    // this.context.fillStyle = 'rgba(255, 0 , 0 , 0.5)'; 
    // this.context.fillRect(100,100,100,100); 
    // this.context.fillStyle = 'rgba(0, 0, 255, 0.5)'; 
    // this.context.fillRect(400,100,100,100); 
    // this.context.fillStyle = 'rgba(0, 255, 0 , 0.5)'; 
    // this.context.fillRect(300,300,100,100); 

    // this.context.beginPath();
    // this.context.moveTo(50,300);
    // this.context.lineTo(300,100);
    // this.context.lineTo(400,500);
    // this.context.strokeStyle = "fa34a4";
    // this.context.stroke();

    window.addEventListener('mousemove',
      (event) => {
        this.mouse = new Mouse(event);
      });

      window.addEventListener('touchmove',
      (event) => {
        this.mouse = new Mouse(event);
      });


    for (var i = 0; i < 300; i++) {
      var radius = 30;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - (radius + this.toolbar) * 2) + (radius + this.toolbar);
      var dx = (Math.random() - 0.5);
      var dy = (Math.random() - 0.5);
      this.circleArray.push(new Circle(this.context, x, y, dx, dy, radius));
    }
    this.obj = new Circle(this.context, 200, 200, 4, 5, 30);
    this.animate();
  }


  public animate = () => {
    this.context.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < this.circleArray.length; i++) {
      this.circleArray[i].update(this.mouse);
    }
    requestAnimationFrame(this.animate);

  }

  ngOnInit() {
  }

}
