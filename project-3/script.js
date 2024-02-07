const searchContent = document.getElementById("searchbar");
const name = document.getElementById("name");
const image = document.getElementById("img");
const statsContainer = document.getElementById("baseStats");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", getData);

function getData() {
    axios
        .get("https://pokeapi.co/api/v2/pokemon/" + searchContent.value)
        .then((res) => {
            const baseStats = res.data.stats;
            const name = res.data.name;
            const image = res.data.sprites.front_default;
            console.log(res, image, name);
            displayData(image, name, baseStats);
        })
        .catch((err) => console.log(err));
}

function displayData(img, pokeName, baseStats) {
    name.textContent = pokeName;
    image.src = img;

    statsContainer.innerHTML = "";
    baseStats.forEach((e) => {
        const statName = document.createElement("h4");
        statName.textContent = e.stat.name;

        const stat = document.createElement("p");
        stat.textContent = e.base_stat;

        const statDiv = document.createElement("div");
        statDiv.className = "stat";
        statDiv.appendChild(statName);
        statDiv.appendChild(stat);

        statsContainer.appendChild(statDiv);
    });
}
