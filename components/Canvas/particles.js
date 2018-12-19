/*
 * @Author: XueYu 😊
 * @Date: 2018-11-25 11:49:55
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-11-26 13:04:29
 */
import mathTool from '../../utils/mathTool'

let gravity = '0',
duration = '0.4',
speed = '0.1',
radius = '2',
resolution = '10';

let graVal = parseFloat(gravity);
let durVal = parseFloat(duration);
let spdVal = parseFloat(speed);
let radVal = parseFloat(radius);
let resVal = parseFloat(resolution);

let colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
];

function Particle(context, {x, y, type='ball',} ) {
  this.radius = 1.1;
  this.futurRadius = mathTool.randomInt(radVal, radVal+3); //[2,6]
  this.rebond = mathTool.randomInt(1, 5);
  this.x = x;
  this.y = y;

  this.dying = false;

  this.base = [x, y];

  this.vx = 0;
  this.vy = 0;
  this.type = type;
  this.friction = .99;
  this.gravity = graVal;
  this.color = colors[Math.floor(Math.random() * colors.length)];

  this.getSpeed = function() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  };

  this.setSpeed = function(speed) {
    let heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  this.getHeading = function() {
    return Math.atan2(this.vy, this.vx);
  };

  this.setHeading = function(heading) {
    let speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  };

  this.update = function(heading) {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += graVal;

    this.vx *= this.friction;
    this.vy *= this.friction;

    if(this.radius < this.futurRadius && this.dying === false){
      this.radius += durVal;
    }else{
      this.dying = true;
    }

    if(this.dying === true){
      this.radius -= durVal;
    }

    if(type === "ball"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      context.closePath();
      context.fill();
      context.restore();
    }

    if(type === "rect"){
      context.save();
      context.fillStyle = this.color;
      context.beginPath();
      context.fillRect(this.x, this.y, this.futurRadius, this.futurRadius)
      context.closePath();
      context.fill();
      context.restore();
    }


    if (this.y < 0 || this.radius < 1) {
      this.x = this.base[0];
      this.y = this.base[1];
      this.dying = false;
      this.radius = 1.1;
      this.setSpeed(spdVal);
      this.futurRadius = mathTool.randomInt(radVal, radVal+3);
      this.setHeading(mathTool.randomInt(mathTool.degreesToRads(0), mathTool.degreesToRads(360)));
    }

  };

  this.setSpeed(mathTool.randomInt(.1, .5));
  this.setHeading(mathTool.randomInt(mathTool.degreesToRads(0), mathTool.degreesToRads(360)));

}

export default Particle