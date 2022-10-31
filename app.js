// get close

let $return_back = document.getElementById("return_back");

$return_back.addEventListener("click" , function() {
    location.href = 'https://ziadahmedfawzy.github.io/home_page_web_application/';
});

// get search

let $seacrh_icon = document.getElementById("seacrh_icon");
// get search container
let $search_container = document.getElementById("search_container");

$seacrh_icon.addEventListener("click" , function() {
    $search_container.classList.add('show');
    $search_container.classList.remove('hide');
})

let $close = document.getElementById("close");

$close.addEventListener("click" , function() {
    $search_container.classList.remove('show');
    $search_container.classList.add('hide');
})

// title app 

function titleHead() {
    let $title = localStorage.getItem("name");
    document.title = $title;
}

titleHead()

// getName App

let $name_app = document.getElementById("name_app");

function nameApp() {
    let $name = localStorage.getItem("name");
    $name_app.innerText = $name;
}

nameApp()

let download = document.getElementById("download");

// download.addEventListener("click" , function() {
//     location.href = '../download_animation.html';
// })
