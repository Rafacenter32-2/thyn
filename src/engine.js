//@ts-check
import kaplay from "kaplay";
import "kaplay/global";
 
export const k = kaplay({
    buttons: {
        left:   {
            gamepad:["lshoulder","ltrigger","west"],
        },
        right:  {
            gamepad:["rshoulder","rtrigger","south"]
        },
    },
    letterbox:true,
    width:1366,
    height:768
})

