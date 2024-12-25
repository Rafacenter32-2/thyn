//@ts-check
import { k } from "../engine.js"
import "../assets.js"

const ring_menu = ({ size,pos:{x,y},color,callback,text:{text,fontsize,fontcolor,font} })=>{
    //i did this before but i lost my code 😢
    const button = add([
        ,k.circle(size/2)
        ,k.pos(x,y)
        ,k.color(color)
        ,k.outline(30,color,0.5)
        ,k.area()
        ,k.scale(1)
        ,"ringbutton"
        ,{callback}
    ])
    button.onDraw(()=>{
        drawText({
            text:text,
            size:fontsize,
            color:fontcolor,
            font:font,
            anchor:"center"
        })
    })


    return { button, }
}

export { ring_menu }