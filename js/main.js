burger = document.querySelector('#burger');
navbar = document.querySelector('#navbar');
logo = document.querySelector('#left-logo');
navList = document.querySelector("#nav-list");
rightSearch = document.querySelector("#right-search");


burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-resp');
    navbar.classList.toggle('nav-trans');
    logo.classList.toggle('v-resp');
    navList.classList.toggle('v-resp');
    rightSearch.classList.toggle('v-resp');

    if (burger.children[1].id && burger.children[2].id) {
        burger.children[1].id = "";
        burger.children[2].id = "";

    }
    else {
        burger.children[1].id = "line-2";
        burger.children[2].id = "line-3";
    }

})
