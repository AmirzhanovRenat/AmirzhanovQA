let button = document.querySelector('#button');
let input = document.querySelector('#input');
let p = document.querySelector('#p');
button.addEventListener('click', function () {
    input.value = p.textContent;
    p.textContent = '';
});
vxc