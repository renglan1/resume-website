const bottomNavExpand = document.querySelector("#bottom-nav-expand");
const bottomNavMenu = document.querySelector("#bottom-nav-menu"); 
const bottomNavLinks = document.querySelectorAll(".bottom-nav-link");

// Allows each link to automatically close the menu when selected
bottomNavLinks.forEach(navLink => {
    navLink.addEventListener("click", function() {
        showBottomNavMenu();
    });
});

bottomNavExpand.addEventListener("click", function() {
    showBottomNavMenu();
});

function showBottomNavMenu(){
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