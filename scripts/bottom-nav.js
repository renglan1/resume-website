let bottomNavExpand = document.querySelector("#bottom-nav-expand");
let bottomNavMenu = document.querySelector("#bottom-nav-menu"); 
const bottomNavLinks = document.querySelectorAll(".bottom-nav-link");

bottomNavLinks.forEach(navLink => {
    navLink.addEventListener("click", function(){
        expandHideMenu();
    });
});

bottomNavExpand.onclick = () => {
    expandHideMenu();
}

function expandHideMenu(){
    if(isHidden(bottomNavMenu)){
        bottomNavMenu.style.display = "contents";
        bottomNavExpand.innerHTML = "- sections"
        return;
    }
   
    bottomNavMenu.style.display = "none";
    bottomNavExpand.innerHTML = "+ sections"
}

function isHidden(element){
    return window.getComputedStyle(element).display === "none"
}