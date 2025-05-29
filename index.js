let findH1 = document.querySelector('h2');

let findImg = document.querySelector('img');

let findSlideButton = document.querySelector('.toRight');

let arr = [
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

findH1.innerText = arr[0].title;

findImg.src = arr[0].src;


let count=0;

findSlideButton.addEventListener("click", () => {
    count++;
    console.log(count);
    
    if(count>arr.length-1){
       count=0;
    }

    findH1.innerText = arr[count].title;

    findImg.src = arr[count].src;


    console.log(`Right title : ${arr[count].title} and img link : ${arr[count].src}`);
    
})

let findLeftButton=document.querySelector('.toLeft')

// let countLeft=arr.length

findLeftButton.addEventListener('click',()=>{
    count--;
    console.log(count);

    if(count<0){
       count=arr.length-1;
    }
    

    findH1.innerText = arr[count].title;

    findImg.src = arr[count].src;


    console.log(`Left title : ${arr[count].title} and img link : ${arr[count].src}`);
})


    arr.forEach(element => {

        console.log(`${element.title} and ${element.src}`);
    });
    let a=2;
    let b=4;


console.log(a%b);
