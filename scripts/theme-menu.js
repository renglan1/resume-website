const themeNames = ["light", "dark", "corroded", "arctic", "tropical", "neptune", "rust", "ugly", "intern"];

buildThemeMenuOptions(themeNames);

// Building the theme menu
function buildThemeMenuOptions(themeNames){
    const themeMenuOptions = document.querySelector("div#theme-menu-options");
    
    for(const themeName of themeNames){
        const themeMenuOption = buildThemeMenuOption(themeName);
        themeMenuOptions.appendChild(themeMenuOption);
    }
}

function buildThemeMenuOption(themeName){
    const themeMenuOption = document.createElement("div");
    themeMenuOption.className = "theme-menu-option";

    const themeMenuOptionInner = document.createElement("div");
    themeMenuOptionInner.className = "theme-menu-option-inner";
    themeMenuOption.appendChild(themeMenuOptionInner);

    const themeMenuOptionPreview = buildThemeMenuOptionPreview(themeName);
    const themeMenuOptionName = document.createElement("span");
    themeMenuOptionName.className = "theme-menu-option-name";
    themeMenuOptionName.textContent = capitalize(themeName);

    if(themeName === "light"){
        themeMenuOptionName.textContent += ` (default)`;
    }

    themeMenuOptionInner.appendChild(themeMenuOptionPreview);
    themeMenuOptionInner.appendChild(themeMenuOptionName);

    return themeMenuOption;
}

function buildThemeMenuOptionPreview(themeName){
    const themeMenuOptionPreview = document.createElement("span");
    themeMenuOptionPreview.className = `theme-menu-option-preview ${themeName}-preview`;

    for(let i = 1; i < 4; i++){
        const section = document.createElement("div");
        section.className = "theme-menu-option-preview-section";
        section.id = `${themeName}-sec-${i}`;
        themeMenuOptionPreview.appendChild(section);
    }

    return themeMenuOptionPreview;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Hide/show functionality of menu
const themeMenuButton = document.querySelector("#theme-menu-button");
const themeMenuOptions = document.querySelector("#theme-menu-options");

themeMenuButton.onclick = () =>{
    showThemeMenuOptions();
}

themeMenuButton.addEventListener("click", event =>{
    event.stopPropagation();
});

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
        storeTheme(themeName);
    });
}

function storeTheme(themeName){
    localStorage.setItem("themeName", themeName);
}

// Automatic hiding of the menu when page clicked
document.addEventListener("click", function() {
    if(themeMenuOptions.style.display != "none"){
        themeMenuOptions.style.display = "none";
    }
});