borderedLinks = document.querySelectorAll(".bordered-link");
borderedHeadings = document.querySelectorAll(".bordered-heading");

styleBorderedLinks(borderedLinks);
console.log("hi");
console.log(borderedLinks);

function styleBorderedLinks(borderedLinks){
    for(const borderedLink of borderedLinks){
        console.log(`link: ${borderedLink}`);
        let containerWidth = borderedLink.clientWidth;
        console.log(containerWidth);
    }
}

function styleBorderedHeadings(borderedHeadings){

}