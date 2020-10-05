import {row, col} from './utils';

function title (block){
    // вместо етого можно записать
    // return `
    //         <div class="row">
    //             <div class="col-sm">
    //                 <h1>${block.value}</h1>
    //             </div>
    //         </div>
    //         `
    return row(col(`<h1>${block.value}</h1>`));
};

function text (block){
    return row(col(`<p>${block.value}</p>`));
};

function columns (block){
    const columsHtml = block.value.map(text => col(text));

    return row(columsHtml.join(''));
};

function image (block){
    return row(`<img src="${block.value}" />`);
};

export const templates = {
    //Если в js имя поля обьекта и его значения соападают то
    //мы можем писать не template: template, а просто template
    title,
    text,
    columns,
    image
};