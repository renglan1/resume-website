const main = document.querySelector("main");
const entryRequestURL = "https://raw.githubusercontent.com/renglan1/resume-website/master/res/entries.json";
const requestURLs = [entryRequestURL];
const loadedContent = [];

populateDocument(requestURLs, loadedContent);

async function populateDocument(requestURLs, loadedContent){
    for(const requestURL of requestURLs){
        console.log(`url: ${requestURL}`);
        const request = new Request(requestURL);
        const response = await fetch(request);
        const content = await response.json();

        loadedContent.push(content);
    }

    populateMain(loadedContent[0]);
}

function populateMain(entriesData){
    console.log(entriesData);
    for(const entryData of entriesData){
        appendEntry(entryData);
    }
}

function appendEntry(entryData){
    const articleID = entryData["entryArticle"];
    articleContent = main.querySelector(`article#${articleID} > div.article-content`);

    const entry = buildEntry(entryData, articleID);
    articleContent.appendChild(entry);
}

function buildEntry(entryData, articleID){
    const entry = document.createElement("div");
    entry.className = "entry";

    const entryTitle = buildEntryTitle(entryData)
    entry.appendChild(entryTitle);

    if(hasSubtitle(entryData)){
        const entrySubtitle = document.createElement("p");
        entrySubtitle.className = "entry-subtitle";
        entry.appendChild(entrySubtitle);
    }

    if(hasLocation(entryData)){
        const entryHR = document.createElement("hr");
        entryHR.className = "entry-hr";
        entry.appendChild(entryHR);
    }

    const entryDesc = buildEntryDesc(entryData, "fa-solid fa-angle-right", articleID);
    entry.appendChild(entryDesc);

    return entry;
}

function buildEntryTitle(entryData){
    const entryTitle = document.createElement("h4");
    entryTitle.className = "entry-title";
    
    const entryName = entryData["entryTitle"]["entryName"];
    const entryNameSpan = document.createElement("span");
    entryNameSpan.className = "entry-name";
    entryNameSpan.textContent = entryName;
    entryTitle.appendChild(entryNameSpan);
    
    if(hasLocation(entryData)){
        const entryLocation = entryData["entryTitle"]["entryLocation"];
        const entryLocationSpan = document.createElement("span");
        entryLocationSpan.className = "entry-location";
        entryLocationSpan.textContent = `${entryLocation["city"]}, ${entryLocation["province"]}`;
        entryTitle.appendChild(entryLocationSpan);
    }

    if(hasPeriod(entryData)){
        const entryPeriod = entryData["entryTitle"]["entryPeriod"];
        const entryPeriodSpan = document.createElement("span");
        entryPeriodSpan.className = "entry-period";
        entryPeriodSpan.textContent = `${entryPeriod["periodStart"]} - ${entryPeriod["periodEnd"]}`;
        entryTitle.appendChild(entryPeriodSpan);
    }

    return entryTitle;
}

function buildEntryDesc(entryData, faBulletIconClass, articleID){
    const entryDesc = document.createElement("ul");
    entryDesc.className = "entry-desc fa-ul";


    if(articleID != "programming-skills"){
        for(entryPoint of entryData["entryDesc"]){
            const entryDescItem = buildEntryDescItem(faBulletIconClass, entryPoint);
            entryDesc.appendChild(entryDescItem);
        }
    }
    else{
        let entryDescText = "";

        for(let i = 0; i < entryData["entryDesc"].length; i++){
            if((i+1) != entryData["entryDesc"].length){
                entryDescText += `${entryData["entryDesc"][i]}, `;
            }
            else{
                entryDescText += entryData["entryDesc"][i];
            }
        }

        const entryDescItem = buildEntryDescItem(faBulletIconClass, entryDescText);
        entryDesc.appendChild(entryDescItem);
    }
    return entryDesc;
}

function buildEntryDescItem(faBulletIconClass, text){
    const entryDescItem = document.createElement("li");

    const faSpan = document.createElement("span");
    faSpan.className = "fa-li";
    
    const faBulletIcon = document.createElement("i");
    faBulletIcon.className = faBulletIconClass;
    
    faSpan.appendChild(faBulletIcon);
    entryDescItem.appendChild(faSpan);

    const entryDescItemText = document.createTextNode(text);
    entryDescItem.appendChild(entryDescItemText);

    return entryDescItem;
}

function hasLocation(entryData){
    return entryData["entryTitle"]["entryLocation"]["city"];
}

function hasPeriod(entryData){
    return entryData["entryTitle"]["entryPeriod"]["periodStart"];
}

function hasSubtitle(entryData){
    return entryData["entrySubtitle"];
}