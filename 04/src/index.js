import {foo} from './foo'
function component() {
  const element = document.createElement("div");

  console.log("hello world")
  element.innerHTML = "hello world" 
  console.log(foo())

  return element;
}

document.body.appendChild(component());
