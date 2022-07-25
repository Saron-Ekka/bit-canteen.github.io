function classToggle(){
    const navs= document.querySelectorAll('.ul')

    navs.forEach(nav =>
        nav.classList.toggle('.ulShow'));
}

document.querySelector('.ul').addEventListener('click', classToggle);

