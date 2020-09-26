window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const input = document.querySelector('input'),
          addBtn = document.querySelector('button'),
          itemList = document.querySelector('#item-list');

    // add item
    addBtn.addEventListener('click', () => {
        if (input.value !== '') {
            const item = document.createElement('li');
            item.classList.add('item');
            item.textContent = input.value;
            itemList.appendChild(item);
    
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.textContent = '×';
            item.appendChild(closeBtn);  
        } else {
            input.setAttribute('placeholder', 'You must write something!');
            setTimeout(() => {
                input.setAttribute('placeholder', 'Title...');
            }, 2000);
        }
    });

    // close
    itemList.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('close')) {
            const child = itemList.querySelectorAll('span');
            child.forEach((items, i) => {
                if (target === items) {
                    itemList.childNodes[i].remove();
                }
            });
        }
    });

    // checked
    itemList.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('item')) {
            const children = itemList.childNodes;
            children.forEach(items => {
                if (target === items) {
                    items.classList.toggle('checked');
                }
            });
        }
    });
});   