/*
 * @Author: XueYu 😊
 * @Date: 2018-11-25 11:37:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-12-22 13:10:49
 */
import Particle from './particles'

export default class Shape {
	constructor({
		x=0, y=0, width=0, height=0, size=200, message='',
		gridY=7, gridX=7, type='ball'
	}={}){

		if (!Shape.INSTANCE) {
			Shape.INSTANCE = this
		}
		Shape.INSTANCE.x = x
		Shape.INSTANCE.y = y
		Shape.INSTANCE.width = width
		Shape.INSTANCE.height = height
		Shape.INSTANCE.message = message
		Shape.INSTANCE.size = size
		Shape.INSTANCE.gridX = gridX
		Shape.INSTANCE.gridY = gridY
		Shape.INSTANCE.type = type
		Shape.INSTANCE.placement = []
		return Shape.INSTANCE
	}

	getValue = context => {
		const {
			x, y, width, height, size, message, placement, gridX, gridY, type
		} = Shape.INSTANCE

		context.textAlign = "center";
		context.font = size + "px arial";
		context.fillText(message, x, y);

		let idata = context.getImageData(0, 0, width, height);
		let buffer32 = new Uint32Array(idata.data.buffer);
		for(let j=0; j < height; j += gridY){
			for(let i=0 ; i < width; i += gridX){
				if(buffer32[j * width + i]){
					let particle = new Particle(context, {x: i, y: j, type});
					placement.push(particle);
				}
			}
		}

		context.clearRect(0, 0, width, height);
	}
}
