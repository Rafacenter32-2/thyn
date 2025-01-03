//@ts-check
import { k } from "../engine.js";
import "../assets.js";
/**
 *
 * @param {Object} param0
 * @param {boolean} param0.islogo
 * @param {number} param0.scale
 * @param {boolean} param0.isrightstick
 * @param {object} param0.position
 * @param {*} param0.color
 * 2 that dosent work
 */

const stick = ({ islogo, position: { x, y }, scale, color, isrightstick }) => {
  const circle = k.add([
    (() => {
      if (islogo) {
        return k.sprite("logo_body");
      } else {
        return k.circle(1280 / 2);
      }
    })(),
    k.anchor("center"),
    k.pos(x, y),
    k.scale(scale),
    (() => {
      if (!islogo) {
        return k.color(color);
      }
    })(),
    k.animate(),
  ]);
  const stick = circle.add([
    sprite("stick"),
    anchor("center"),
    pos(0, 0),
    area(),
    animate(),
    opacity(1),
    { click: false },
  ]);
  //scripts
  onUpdate(() => {
    const { abs } = Math;
    stick.pos.x = getGamepadStick("left").x * (1280 / 2 - 384 / 2);
    stick.pos.y = getGamepadStick("left").y * (1280 / 2 - 384 / 2);
    /*
        if (abs(getGamepadStick('left').x) + abs(getGamepadStick('left').y) + 0.3 > 1.1) {
            
            stick.opacity = 1
        } else {
            stick.opacity = abs(getGamepadStick('left').x) + abs(getGamepadStick('left').y) + 0.3
        }
            was what i would code if i was me! 5 seconds ago*/
    let temp =
      abs(getGamepadStick("left").x) + abs(getGamepadStick("left").y) + 0.3;
    stick.opacity = temp < 1 ? temp : 1;
  });

  if (islogo) {
    const text = circle.add([sprite("logo_text"), anchor("center")]);
    return { circle, stick, text };
  }
  return { circle, stick };
};
export { stick };
