borderedLinks = document.querySelectorAll(".bordered-link");
borderedHeadings = document.querySelectorAll(".bordered-heading");

styleBorderedLinks(borderedLinks);
styleBorderedHeadings(borderedHeadings);

function styleBorderedLinks(borderedLinks){
    for(const borderedLink of borderedLinks){
        const containerHeight = borderedLink.offsetHeight;
        const borderWidth = 0.04*containerHeight
        const thickBorderWidth = 0.15*containerHeight;

        borderedLink.style.borderWidth = `${borderWidth}px ${thickBorderWidth}px ${thickBorderWidth}px ${borderWidth}px`;
    }
}

function styleBorderedHeadings(borderedHeadings){
    for(const borderedHeading of borderedHeadings){
        const containerHeight = borderedHeading.offsetHeight;
        const borderWidth = 0.01*containerHeight;
        const thickBorderWidth = 0.12*containerHeight;

        borderedHeading.style.borderWidth = `${borderWidth}px ${borderWidth}px ${borderWidth}px ${thickBorderWidth}px`;
    }
}