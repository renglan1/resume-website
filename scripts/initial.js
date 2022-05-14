const html = document.querySelector("html");

window.onload = () =>{
    if(localStorage.getItem("themeName")){
        html.className = localStorage.getItem("themeName") + "-theme";
    }
}