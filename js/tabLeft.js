var tabs = document.querySelector('.js-tabs');
var tabItems = document.querySelectorAll('.js-tab-item:not(.js-tab-item-main-control)');
var tabItemMainControl = document.querySelector('.js-tab-item-main-control');
tabItemMainControl.addEventListener('click', function () {
    if (tabs.classList.contains('js-tabs-init')) {
        tabs.classList.remove('js-tabs-init');
        tabItemMainControl.style.transform = 'rotate(45deg)';
        for (var i = 0; i < tabItems.length; i++) {
            tabItems[i].classList.add('js-tab-item-show');
        }
    } else {
        for (var i = 0; i < tabItems.length; i++) {
            tabItems[i].classList.remove('js-tab-item-show');
        }
        setTimeout(function () {
            tabItemMainControl.style.transform = 'rotate(0deg)';
            tabs.classList.add('js-tabs-init');
        }, 2000);
    }
});
$("#modal-1").animatedModal({
    animatedIn: 'fadeInLeft',
    animatedOut: 'fadeOutRight',
    color: '#ee3137',
});