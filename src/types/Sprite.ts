/** 
 * @author nikeedev
 * 
 * @license MIT
 * @type {HTMLCanvasElement} 
 * 
 * 
 * 
*/

import { Size } from "./Size.js";
import { Vector2 } from "./Vector2.js";

class Sprite {
    imageSrc: string;
    position: Vector2;
    //size: Size | undefined;
    screenSize: Size;
    
    constructor(imageSrc: string, position: Vector2, /*size: Size = null*/screenSize: Size) {
        this.imageSrc = imageSrc;
        this.position = position;
        //this.size = typeof size != null ? size : null;
        this.screenSize = screenSize;
    }

    color = "#000000";
    image = document.querySelector('body').appendChild(document.createElement("img"));
    draw(ctx: any, ClearScreen: boolean) {
        this.image.src = "./" + this.imageSrc;
        this.image.style.display = "none";
        ctx.fillStyle = this.color;
        if (ClearScreen) 
            ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }/*
    looping: boolean | undefined;
    update(ctx: any, func: any, ClearScreen: any, looping = true) {  
        this.looping = typeof looping == 'boolean'? looping : true;       
        const updateMethod = () => {
            ctx.fillStyle = this.color;
            func();
            if (ClearScreen) 
                ctx.clearRect(0, 0, this.screenSize.width, this.screenSize.height);
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
            if (this.looping) requestAnimationFrame(updateMethod);
        };
        
        requestAnimationFrame(updateMethod);  
    }*/
}


export { Sprite }; 