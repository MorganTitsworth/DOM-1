export const videoFrame2 = [
   {
        img:"./assets/img/thinker.png",
        title:"Frontend Testing Best Practices",
        description:"See How You Can Incorporate Synthetic Tests Into Your CI/CD Pipeline.",
        sponsor:"Sponsor",
    },

    {
        img:"./assets/img/lady.png",
        title:"Frontend Testing Best Practices",
        description:"See How You Can Incorporate Synthetic Tests Into Your CI/CD Pipeline.",
        sponsor:"Sponsor",
    },

    {
        img:"./assets/img/lady.png",
        title:"Frontend Testing Best Practices",
        description:"See How You Can Incorporate Synthetic Tests Into Your CI/CD Pipeline.",
        sponsor:"Sponsor",
    },
    {
        img:"./assets/img/Soldiers.png",
        title:"Frontend Testing Best Practices",
        description:"See How You Can Incorporate Synthetic Tests Into Your CI/CD Pipeline.",
        sponsor:"Sponsor",
    }
]

const video = document.getElementsByClassName("video2");

for (var i = 0; i < videoFrame2.length; i++) {
    const imgFrame = videoFrame2[i];
    const div = document.createElement("div");
    div.setAttribute("class", "video m-2 col"); 
   

    const img = document.createElement("img");

    img.src = imgFrame.img;   
    img.setAttribute("class", "videoPic mb-2");      
    const h6 = document.createElement("h6");
    h6.innerText = imgFrame.title;
    const p = document.createElement("p");
    p.innerText = imgFrame.description;
    const h5 = document.createElement("h5");
    h5.innerText = imgFrame.description;
    
    video[0].appendChild(div);
    div.appendChild(img);
    div.appendChild(h6);
    div.appendChild(p);
}