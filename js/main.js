burger=document.querySelector('#burger');
navbar=document.querySelector('#navbar');
logo=document.querySelector('#left-logo');
navList=document.querySelector("#nav-list");
rightSearch=document.querySelector("#right-search");

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-resp');
    logo.classList.toggle('v-resp');
    navList.classList.toggle('v-resp');
    rightSearch.classList.toggle('v-resp');
})
