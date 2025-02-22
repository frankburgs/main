const thing = {
    observations: [
        {
            text: "Sling is frayed",
        },
        {
            text: "Manufacturer's label is illegible",
        }
    ],
    recommendations: [
        {
            text: "Tag & isolate sling",
        },
        {
            text: "Replace sling",
            link: "https://www.uline.com/BL_4023/Slings"
        }
    ],
    references: [
        {
            text: "29 CFR 1910.184(c)(1)",
            link: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(1)"
        },
        {
            text: "29 CFR 1910.184(c)(14)",
            link: "https://www.ecfr.gov/current/title-29/part-1910/section-1910.184#p-1910.184(c)(14)"
        }
    ],
    type: "fed",
    media: "frayedSling",
}

// Function myFun receives something, either observations, recommendations, or references.
function myFun(something){
    let newArray = [];
    for (let obj of something) {
        if (obj.link){
            let newAnchor = document.createElement("a");
            newAnchor.href = obj.link;
            newAnchor.innerHTML = obj.text;
            let anchorStr = newAnchor.outerHTML;
            newArray.push(anchorStr);
        }
        else{
            newArray.push(obj.text);
        }
    }
    let newStr = newArray.join("<br/>");
    let newCell = document.createElement("td");
    newCell.innerHTML = newStr;
    return newCell;
};