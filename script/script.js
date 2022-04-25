
//burger-menu/noScroll

const iconParent = document.querySelector('.header__burger')
menuOpen = document.querySelector('.header__nav')
menuClose = document.querySelector('.header__burger')
bodyLock = document.querySelector('body')

iconParent.addEventListener('click', function () {
    menuOpen.classList.toggle('active')
    menuClose.classList.toggle('active')
    bodyLock.classList.toggle('lock')

})

//dark-white_themes

const themeToggler = document.querySelector('.header__input')
themeToggler.onclick = () => {
    themeToggler.classList.toggle('white')
    if (themeToggler.classList.contains('white')) {
        document.body.classList.add('white')
    } else {
        document.body.classList.remove('white')
    }
}

