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

function populateMain(entries){
    console.log(entries);
    for(const entry of entries){
        appendEntry(entry);
    }
}

function appendEntry(entry){
    const articleID = entry["entryArticle"];
    articleContent = main.querySelector(`article#${articleID} > div.article-content`);
    buildEntry(articleContent, entry);
}

function buildEntry(articleContent, entry){
    entryTitle = document.createElement("h4");
    entryTitle.className = "entry-title";
    console.log(entryTitle);
    buildEntryTitle(articleContent, entryTitle, entry);
}

function buildEntryTitle(articleContent, entryTitle, entry){
    entryName = document.createElement("span");
    entryName.className = "entry-name";
}