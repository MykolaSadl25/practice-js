// // import colors from "./colors.json";
// // import createItems from "./js/createItems";
// // const bodyRef = document.querySelector("body")
// // const listRef = document.querySelector(".palette")
// // listRef.innerHTML = createItems(colors);

// // listRef.addEventListener("click",(e)=>{
// //     if (e.target.nodeName === "DIV") {
// //         bodyRef.style.backgroundColor = e.target.dataset.hex
// //     }
// // })

// const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     year: 2010,
//     genre: ["Sci-Fi", "Action", "Thriller"],
//     rating: 8.8,
//     duration: 148,
//     director: "Christopher Nolan",
//     cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
//     isOscarWinner: true
//   },
//   {
//     id: 2,
//     title: "The Dark Knight",
//     year: 2008,
//     genre: ["Action", "Crime", "Drama"],
//     rating: 9.0,
//     duration: 152,
//     director: "Christopher Nolan",
//     cast: ["Christian Bale", "Heath Ledger"],
//     isOscarWinner: true
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     year: 2014,
//     genre: ["Sci-Fi", "Drama"],
//     rating: 8.6,
//     duration: 169,
//     director: "Christopher Nolan",
//     cast: ["Matthew McConaughey", "Anne Hathaway"],
//     isOscarWinner: true
//   },
//   {
//     id: 4,
//     title: "Titanic",
//     year: 1997,
//     genre: ["Romance", "Drama"],
//     rating: 7.9,
//     duration: 195,
//     director: "James Cameron",
//     cast: ["Leonardo DiCaprio", "Kate Winslet"],
//     isOscarWinner: true
//   },
//   {
//     id: 5,
//     title: "Avatar",
//     year: 2009,
//     genre: ["Sci-Fi", "Adventure"],
//     rating: 7.8,
//     duration: 162,
//     director: "James Cameron",
//     cast: ["Sam Worthington", "Zoe Saldana"],
//     isOscarWinner: true
//   },
//   {
//     id: 6,
//     title: "The Matrix",
//     year: 1999,
//     genre: ["Sci-Fi", "Action"],
//     rating: 8.7,
//     duration: 136,
//     director: "The Wachowskis",
//     cast: ["Keanu Reeves", "Laurence Fishburne"],
//     isOscarWinner: true
//   },
//   {
//     id: 7,
//     title: "Forrest Gump",
//     year: 1994,
//     genre: ["Drama", "Romance"],
//     rating: 8.8,
//     duration: 142,
//     director: "Robert Zemeckis",
//     cast: ["Tom Hanks", "Robin Wright"],
//     isOscarWinner: true
//   },
//   {
//     id: 8,
//     title: "The Shawshank Redemption",
//     year: 1994,
//     genre: ["Drama"],
//     rating: 9.3,
//     duration: 142,
//     director: "Frank Darabont",
//     cast: ["Tim Robbins", "Morgan Freeman"],
//     isOscarWinner: false
//   },
//   {
//     id: 9,
//     title: "Gladiator",
//     year: 2000,
//     genre: ["Action", "Drama"],
//     rating: 8.5,
//     duration: 155,
//     director: "Ridley Scott",
//     cast: ["Russell Crowe", "Joaquin Phoenix"],
//     isOscarWinner: true
//   }
// ];

// const listRef = document.querySelector(".list");

// let currentMovie = movies;

// const STORAGE_KEY = "movieData"
// const parseMovies = localStorage.getItem(STORAGE_KEY);
// console.log(parseMovies);


// if (parseMovies) {
//     currentMovie = JSON.parse(parseMovies);
//     createItems(currentMovie);
// }

// function createItems(array) {
//     const item = array.map(({id,title,year,rating,director,isOscarWinner}) =>{
//         return `<li class="item" id="${id}">
//   <h2 class="title">Name:${title}</h2>
//   <p class="year">Year:${year}</p>
//   <p class="rating">Rating:${rating}</p>
//   <h3 class="director">Director:${director}</h3>
//   <p class="oscarWinner">Oscar Winner:${isOscarWinner?"Yes":"No"}</p>
//   <button type="button" class="delete">X</button>
// </li>`
//     }).join("");

//     listRef.innerHTML = item;
// }

// createItems(currentMovie);

// listRef.addEventListener("click",(e)=>{
//     if (e.target.nodeName !== "BUTTON") {
//         return
//     }
//     const id = Number(e.target.closest("li").id);
//     const idx = currentMovie.findIndex((movies)=> movies.id === id)
//     currentMovie.splice(idx,1)
//     localStorage.setItem(STORAGE_KEY,JSON.stringify(currentMovie))
//     createItems(currentMovie)
    
// })

// console.log(1);
// console.log(2);
// console.log(3);

// // sets a time in ms when it will show up  but will work only after sync code

// setTimeout(()=>{
//   console.log("виклик функції всередині setTimout");
// },0)

// let count = 0

// // sets interval for function to run endlessly
// setInterval(()=>{
//   count+=1
//   console.log("виклик функції всередині setInterval",count);
// },2000);

const counterRef = document.querySelector(".number")
const stopRef = document.querySelector(".stop")
let count = 0

const id = setInterval(()=>{
  count+=1
  counterRef.textContent = count
},1000)
stopRef.addEventListener("click",()=>{
  clearInterval(id)
})

// Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди. Використовуйте setInterval для зміни кольору.

const box = document.querySelector(".box");

setInterval(()=>{
  let r = Math.round(Math.random() * (255 - 1) + 1)
  let g = Math.round(Math.random() * (255 - 1) + 1)
  let b = Math.round(Math.random() * (255 - 1) + 1)
  
  box.style.backgroundColor = `rgb(${r},${g},${b})`
},3000)


//Завдання "Зміна тексту": Створіть текст, який циклічно змінюється між кількома заданими значеннями. Використовуйте setInterval для зміни тексту кожні 2 секунди.

const strings = ["hi","my","name","is","Mykola"];

const titleRef = document.querySelector(".string");
let index = 0
setInterval(()=>{
  titleRef.textContent = strings[index]
  index+=1
  if (index === strings.length) {
    index = 0
  }
},2000);

// Завдання "Затримка повідомлення": Створіть функцію, яка приймає текстове повідомлення and time of delay та затримує його виведення на сторінку на певний час, використовуючи setTimeout.

const textRef = document.querySelector(".message")

function delayText(text,time) {
  setTimeout(()=>{
    textRef.textContent= text;
  },time)
}

delayText("Hello World from Javascript",2500);

// Завдання "Зміна розміру": Створіть блок, який змінює свій розмір кожні 4 секунди. Використовуйте setInterval для зміни ширини та висоти блоку.

let width = 100;
let height = 100;

const sizeRef = document.querySelector(".size")

setInterval(()=>{
  sizeRef.style.width = width+"px"
  sizeRef.style.height = height+"px"
  width+=100;
  height+=100;
},4000)