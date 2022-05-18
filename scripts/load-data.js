const main = document.querySelector("main");
const entryRequestURL = "https://github.com/renglan1/resume-website/blob/master/res/entries.json";
const requestURLs = [entryRequestURL];
const loadedContent = [];

async function populateDocument(requestURLs, loadedContent){
    for(const requestURL in requestURLs){
        const request = new Request(requestURL);
        const response = await fetch(request);
        const content = response.json();

        loadedContent.push(content);
    }
}

populateMain();

function populateMain(entries){
    let article;
    for(const entry of entries){
        const articleID = entry["entryArticle"];
        console.log(articleID);
    }
}