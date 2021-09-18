import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import dataJson from "./data.json";
import json from "./data.json5";

console.log(dataJson);

console.log(json.title); // output `JSON5 Example` 
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // 添加图片
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
