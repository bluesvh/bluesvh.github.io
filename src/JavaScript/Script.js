let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.list');
let thumb = document.querySelector('.thumb');

btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    let listItems = list.querySelectorAll('.list-item');
    let thumbItems = thumb.querySelectorAll('.thumb-item');

    if (type === 'next') {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 500); // Reduzi o tempo de espera para 500ms para uma transição mais suave
}
