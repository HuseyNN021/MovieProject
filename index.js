let movies = [

    {
        title: 'Mask',
        src: './images/Mask.jpg'
    },
    {
        title: 'Karate Kid',
        src: './images/KarateKid.jpg'
    },
    {
        title: 'HarryPotter',
        src: './images/HarryPotter.jpg'
    },
    {
        title: 'Back to the Future',
        src: './images/BackToFuture.jpg'
    },
    {
        title: 'Good Will Hunting',
        src: './images/GoodWillHunting.jpg'
    },
    {
        title: 'Spiderman',
        src: './images/Spiderman.jpg'
    },
    {
        title: 'The Wind Rises',
        src: './images/WindRises.jpg'
    },
]

let currentIndex = 0;

const titleElement = document.querySelector(".slideContent h2");
const imageElement = document.querySelector(".slideContent img");

const updateSlide = () => {
    titleElement.textContent = movies[currentIndex].title;
    imageElement.src = movies[currentIndex].src;
};

document.querySelector(".toLeft").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + movies.length) % movies.length;
    updateSlide();
});

document.querySelector(".toRight").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % movies.length;
    updateSlide();
});

updateSlide();