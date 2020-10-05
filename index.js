'use strict';

const site = document.getElementById('site');

const model = [
    {type: 'title', value: 'hello from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: [
        '111111111',
        '22222222222',
        '3333',
        '444444444'
    ]},
    {type: 'image', value: './imgs/009a8fccc435da219611ee3e128c2f00.jpg'}
];

model.forEach(block => {
    let html = '';

    switch (block.type){
        case 'title':
            html = title(block);
            break;
        case 'text':
            html = text(block);
            break;
        case 'columns':
            html = columns(block);
            break;
        case 'image':
            html = image(block);
            break;
        
        default:
            html = '<h1>Something wrong!</h1>'
            break;
    }

    site.insertAdjacentHTML('beforeend', html);
});

function title (block){
    return `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
            `
};

function text (block){
    return `
            <div class="row">
                <div class="col-sm">
                    <p>${block.value}</p>
                </div>
            </div>
            `
};

function columns (block){
    const columsHtml = block.value.map(text => `<div class="col-sm">${text}</div>`);

    return `  <div class="row">
                ${columsHtml.join('')}
            </div>
            `
};

function image (block){
    return `
    <div class="row">
        <img src="${block.value}" />
    </div>
    `
};