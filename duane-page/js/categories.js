

export const Categories = [
    "All","Gaming","Music","Dragon Ball Z","Livestream"," Live", "Anime", "Mixes","Javascript", "Super", "Gadgets","Martial Arts","Machine learning"
]



let buttons = "";

for(let x in Categories) {

    buttons += "<button class='category-buttons'>" + Categories[x] + "</button>";//the if statement makes it so I can display how many categories
}



document.getElementById("categories").innerHTML = buttons;

/*
for(let i=0; i<Categories.length; i++){ //for each Categories, create a div, set a class, then push the Categories to category div
    console.log("test");
    const div = document.createElement("div"); 
        div.setAttribute("class", "category");
        const button = document.createElement("button");
        div.appendChild(button);
        button.textContent =  Categories[i];
        categories.appendChild(div);



}*/