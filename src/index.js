import _ from 'lodash';
import './style.css'
import Icon from './logo512.png'
import printMe from './print.js'


function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['--', 'a '], ' ');

  element.classList.add('hello')

  let img = new Image()
  img.src = Icon

  element.appendChild(img)

  const btn = document.createElement('button');
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());
