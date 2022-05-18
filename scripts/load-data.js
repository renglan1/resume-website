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
        const articleID = entry["entryArticle"];
        console.log("articleID: " + articleID);
        const article = main.querySelector(`article#${articleID}`);
        console.log(article);
    }
}

function appendEntry(article, entry){

}