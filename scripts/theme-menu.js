// Hide/show functionality of menu
const themeMenuButton = document.querySelector("#theme-menu-button");
const themeMenuOptions = document.querySelector("#theme-menu-options")

themeMenuButton.onclick = () =>{
    showThemeMenuOptions();
}

function showThemeMenuOptions(){
    if(isHidden(themeMenuOptions)){
        themeMenuOptions.style.display = "block";
        return;
    }
   
    themeMenuOptions.style.display = "none";
}

function isHidden(element){
    return window.getComputedStyle(element).display === "none";
}

// Changing themes behavior
const themeMenuOptionList = document.querySelectorAll("div.theme-menu-option");
const themeMenuOptionNameList = document.querySelectorAll("span.theme-menu-option-name");

for(let i = 0; i < themeMenuOptionList.length; i++){
    themeMenuOptionList[i].addEventListener("click", function(){
        let themeMenuOptionNameTextContent = themeMenuOptionNameList[i].textContent.toLowerCase();
        let themeName = themeMenuOptionNameTextContent.split(" ")[0];
        
        document.querySelector("html").className = themeName + "-theme";
    });
}
