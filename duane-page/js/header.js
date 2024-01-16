export const Header = [ //eventhough these are objects they are separated arrays
    {src:"./assets/img/youtube.png"},
    {alt:"youtube"},
    {id:"youtube"},
    {leftHeader:["fa fa-bell", "fa fa-camera"]}
]



 
document.getElementById("header").innerHTML = `<img id=${Header[2].id} src=${Header[0].src} alt=${Header[1].alt} style="height:20px; width:auto; margin:15px">`;  

let header = document.getElementById("header");
header.innerHTML += `<form action="/action_page.php">`;
header.lastChild.innerHTML += `<input type="text" placeholder="Search.." name="search">`;//used the Inspect Element and debug to find how to call form
header.lastChild.innerHTML += `<button type="submit"><i class="fa fa-search"></i>`;

//console.log(Header[3].leftHeader);

//header.innerHTML += `<i class = "${Header[3].leftHeader[0]}">` // have ${Header[3].leftHeader[0]} in parenthesis so it will call both words in string

//Left Side of Header
header.innerHTML += `<div class = "fa-div">`;
for(let i in Header[3].leftHeader) {
    header.lastElementChild.innerHTML += `<i class = "${Header[3].leftHeader[i]}">`;
}
header.lastElementChild.innerHTML += "<div class = 'circle'>";
header.lastElementChild.lastElementChild.innerHTML += "D"; //adds D in the cicle class just created by using lastChild


