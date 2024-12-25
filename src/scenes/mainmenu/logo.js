//@ts-check
import { k } from "../../engine.js";
import "../../assets.js";
import * as globalobjs from "../../objs/stick.js";
import * as buttons from "../../objs/buttons.js";
k.scene("logo", () => {
  let camrotate = true;
  onUpdate(() => {
    //cam anim
    if (camrotate) {
      camRot(Math.sin(time() * 1) * 2);
    }
  });

  const logo = globalobjs.stick({
    color: null,
    position: {
      x: center().x,
      y: center().y,
    },
    islogo: true,
    scale: 0.3,
    isrightstick: false,
  });
  function beep() {
    logo.circle.animate("scale", [vec2(0.29), vec2(0.3)], {
      duration: 60 / 500,
      direction: "ping-pong",
      easing: easings.easeOutCubic,
    });
  }
  beep();
  const start = buttons.ring_menu({
    pos: {
      x: center().x + 260,
      y: center().y,
    },
    size: 170,
    color: BLUE,
    text:{
      font:"sans-serif",
      fontcolor:WHITE,
      fontsize:60,
      text:"start"
    },
    callback:()=>{
      debug.log("to be implemented")
    }
  });
  logo.stick.onCollide("ringbutton", (obj) => {
    obj.scaleTo(1.1);
  });
  logo.stick.onCollideEnd("ringbutton", (obj) => {
    obj.scaleTo(1);
  });
  logo.stick.onCollideUpdate("ringbutton", (obj) =>{
    if (isButtonPressed(["left","right"])) {
        obj.callback()
    }
  })
  
});
