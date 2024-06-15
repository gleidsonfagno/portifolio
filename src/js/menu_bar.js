
var img = document.getElementById("img");
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginRight = '-45vw'; // Alterado de marginLeft para marginRight
        img.src = "./src/img/close.svg"
        navigationHeader.style.animationName = 'showSidebar';
    } else {
        navigationHeader.style.marginRight = '-100vw'; // Alterado de marginLeft para marginRight
         img.src = "./src/img/menu.svg"
        navigationHeader.style.animationName = '';
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 720) {  
        if (showSidebar) {
            toggleSidebar();
        }
        navigationHeader.style.marginRight = '0vw'; // Alterado de marginLeft para marginRight
    }else{
        navigationHeader.style.marginRight = '-100vw'; // Alterado de marginLeft para marginRight
    }
});
