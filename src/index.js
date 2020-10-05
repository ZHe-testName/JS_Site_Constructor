'use strict';

import './styles/main.css';
import {model} from './model';
import {templates} from './template';

const site = document.getElementById('site');

model.forEach(block => {

    const toHtml = templates[block.type]
    
    //ДЛя проверки на не обрабатываемые значения
    //чтобы код подстраховать от падений
    if (toHtml){
        site.insertAdjacentHTML('beforeend', toHtml(block));
    }
});

