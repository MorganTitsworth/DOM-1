export const Navigation = [
    {first:["Home","Shorts","Subsciptions"]},
    {second:[["fa fa-cloud","Your channel"],
             ["fa fa-car","History"],
             ["fa fa-heart","Your video"],
        ]}
]

const navigation = document.getElementById("navigation");


for(let x in Navigation[0].first){ //if let x in Navigation[0] and calling Navigation[0][x] combines first array in one paragraph
    navigation.innerHTML += "<p class=first>" + Navigation[0].first[x] + "</p> ";
}
navigation.innerHTML += "<hr>"; // using = skips the for loop, use += instead


 //console.log(Navigation[1].second[1][0]);

for(let x in Navigation[1].second){
    //navigation.innerHTML += "<p>" + Navigation[1].second[0]["fa fa-cloud"] + "</p>";
 //console.log(Navigation[1].second[0]["fa fa-car"]);
    navigation.innerHTML += `<i class = "${Navigation[1].second[x][0]}">   ${Navigation[1].second[x][1]}</i>`;

}

