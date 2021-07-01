const navToggle  = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    if(links.classList.contains('show-link')) {
        links.classList.remove('show-link')
    }
    else {
        links.classList.add("show-link")
    }
    // links.classList.toggle("show-link")
});