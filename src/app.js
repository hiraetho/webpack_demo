import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    let dom = document.getElementById('app');
    let layer = new Layer();
    // console.log(layer.tpl());

    dom.innerHTML = layer.tpl({
        name: 'ssssb',
        arr: [
            'apple',
            'xiaomi',
            'oppo'
        ]
    });
}

new App();