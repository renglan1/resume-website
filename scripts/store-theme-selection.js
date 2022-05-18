const html = document.querySelector("html");

window.addEventListener("load", function(){
    if(localStorage.getItem("themeName")){
        html.className = localStorage.getItem("themeName") + "-theme";
    }
}); 