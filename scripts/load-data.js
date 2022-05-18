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
    const articles = document.querySelectorAll("section.content > article");
    console.log(articles.length);
    for(const article of articles){
        console.log(article);
    }
}