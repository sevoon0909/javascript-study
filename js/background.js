const imeags = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]

const chosenImage = imeags[Math.floor(Math.random() * imeags.length)];

// const bgImages = document.createElement("img");

// bgImages.src = `img/${chosenImage}`;

const body = document.querySelector("body");

body.style.backgroundImage = `url(img/${chosenImage})`;

//document.body.appendChild(bgImages);