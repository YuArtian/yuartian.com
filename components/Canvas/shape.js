/*
 * @Author: XueYu 😊
 * @Date: 2018-11-25 11:37:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-11-26 11:31:05
 */
import Particle from './particles'

function Shape(x, y, texte){
		this.x = x;
		this.y = y;
		this.size = 150;

		this.text = texte;
		this.placement = [];
		//this.vectors = [];
	}

/*//idata 为一个对象
	let idata = cxt.getImageData(0, 0, W, H);

	ImageData {data: Uint8ClampedArray[1885276], width: 733, height: 643}
		data:Uint8ClampedArray[1885276] //8位无符号整形数组
		height
		:643
		width:733

	let buffer32 = new Uint32Array(idata.data.buffer);
	/*
		将8位无符号整形数组，转换成32位的,范围为[471318]
	*/
Shape.prototype.getValue = function(context, {W, H, gridY=7, gridX=7, type='ball'}){

	context.textAlign = "center";
	context.font =  this.size + "px arial";
	context.fillText(this.text, this.x, this.y);

	let idata = context.getImageData(0, 0, W, H);
	let buffer32 = new Uint32Array(idata.data.buffer);

	for(let j=0; j < H; j += gridY){
		for(let i=0 ; i < W; i += gridX){
			if(buffer32[j * W + i]){
				let particle = new Particle(i, j, type, context);
				this.placement.push(particle);
			}
		}
	}

	context.clearRect(0, 0, W, H);

};

export default Shape
