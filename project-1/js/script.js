const userData = {
    smallCard: {
        profilePic: "./assets/ERAProfile2.png",
        nameHeading: "Andrew Archer",
        jobTitle: "Software Developer",
    },
    largeCard: {
        detailsHeadings: {
            title: "Profile Details",
            name: "Name:",
            age: "Age:",
            mobile: "Mobile:",
            email: "Email:",
            address: "Address:",
        },
        detailsContent: {
            name: "Andrew Archer",
            age: "24",
            mobile: "(123) 456-7890",
            email: "Andrew@gmail.com",
            address: "123 Example St, Anytown, USA",
        },
    },
};

// Small Card Content
let profileImg = document.getElementById("profileImg");
profileImg.setAttribute("src", userData.smallCard.profilePic);

let smallCardheadings = document.querySelectorAll(
    "div.containerCardSmall > h2, div.containerCardSmall h3"
);
smallCardheadings[0].textContent = userData.smallCard.nameHeading;
smallCardheadings[1].textContent = userData.smallCard.jobTitle;

// Large Card Content
let largeCardHeadings = document.querySelectorAll(
    "div.containerCardLarge > h2, div.detailsContainer > div > h3"
);
largeCardHeadings[0].textContent = userData.largeCard.detailsHeadings.title;
largeCardHeadings[1].textContent = userData.largeCard.detailsHeadings.name;
largeCardHeadings[2].textContent = userData.largeCard.detailsHeadings.age;
largeCardHeadings[3].textContent = userData.largeCard.detailsHeadings.mobile;
largeCardHeadings[4].textContent = userData.largeCard.detailsHeadings.email;
largeCardHeadings[5].textContent = userData.largeCard.detailsHeadings.address;

let largeCardContent = document.querySelectorAll(
    "div.detailsContainer > div > p"
);
largeCardContent[0].textContent = userData.largeCard.detailsContent.name;
largeCardContent[1].textContent = userData.largeCard.detailsContent.age;
largeCardContent[2].textContent = userData.largeCard.detailsContent.mobile;
largeCardContent[3].textContent = userData.largeCard.detailsContent.email;
largeCardContent[4].textContent = userData.largeCard.detailsContent.address;
