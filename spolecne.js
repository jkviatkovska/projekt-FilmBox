//Menu
const menuBtn = document.querySelector('#menu-tlacitko');

menuBtn.addEventListener('click', function() {
    const menuItem = document.querySelector('#menu-polozky');
    menuItem.classList.toggle('show');

    const icon = menuBtn.querySelector('i');
    if (menuItem.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});