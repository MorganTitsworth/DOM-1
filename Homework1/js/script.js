const charInfo = {
    
    nav: {
        'nav-item-1':'Home',
        'nav-item-2':'Forum',
        'nav-item-3':'Strategy',
        'nav-item-4':'Maps',
        'nav-item-5':'Lore',
        'img-src':'./assets/img/dungeons.png'
    },
    topBox: {
        iconPic: "./assets/img/goblin.png",
        iconHeading: "Terrybax the Bloody",
        raceClass: "Goblin Foot Soldier"
    },
    bottomBox: {
        statTitle: {
            title: "Character Stats:",
            str: "Strength:",
            dex: "Dexterity:",
            con: "Constitution:",
            int: "Intelligence:",
        },
        statContent: {
            str: "8",
            dex: "5",
            con: "16",
            int: "4",
        },
    },
};

let dungeon = document.getElementById('dungeon-img');
    dungeon.setAttribute('src', charInfo['nav']['img-src']);

const headerNav = document.querySelectorAll('a');

headerNav[0].textContent = charInfo['nav']['nav-item-1'];
headerNav[1].textContent = charInfo['nav']['nav-item-2'];
headerNav[2].textContent = charInfo['nav']['nav-item-3'];
headerNav[3].textContent = charInfo['nav']['nav-item-4'];
headerNav[4].textContent = charInfo['nav']['nav-item-5'];

let iconImg = document.getElementById("iconImg");
iconImg.setAttribute("src", charInfo.topBox.iconPic);

let topBoxtitles = document.querySelectorAll(
    "div.topBox > h2, div.topBox h3"
);
topBoxtitles[0].textContent = charInfo.topBox.iconHeading;
topBoxtitles[1].textContent = charInfo.topBox.raceClass;

let bottomBoxlabels = document.querySelectorAll(
    "div.bottomBox > h2, div.statLabels > h3"
);
bottomBoxlabels[0].textContent = charInfo.bottomBox.statTitle.title;
bottomBoxlabels[1].textContent = charInfo.bottomBox.statTitle.str;
bottomBoxlabels[2].textContent = charInfo.bottomBox.statTitle.dex;
bottomBoxlabels[3].textContent = charInfo.bottomBox.statTitle.con;
bottomBoxlabels[4].textContent = charInfo.bottomBox.statTitle.int;
console.log(bottomBoxlabels)

let bottomBoxStats = document.querySelectorAll(
    "div.statBox > div > p"
);
bottomBoxStats[0].textContent = charInfo.bottomBox.statContent.str;
bottomBoxStats[1].textContent = charInfo.bottomBox.statContent.dex;
bottomBoxStats[2].textContent = charInfo.bottomBox.statContent.con;
bottomBoxStats[3].textContent = charInfo.bottomBox.statContent.int;

let footer = document.querySelectorAll(
    "div.footer > p"
);