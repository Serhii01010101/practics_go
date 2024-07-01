import './style.css'
import axios from 'axios'


// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending/movie/week";
const API_KEY = "345007f9ab440e5b86cef51be6397df1";

let page = 1;

const selectors = {
    container: document.querySelector(".js-movie-list"),
    loadBtn: document.querySelector(".js-load-more")
}

selectors.loadBtn.addEventListener("click", loadMore);

serviceMovie(page)
    .then(data => {
        selectors.container.insertAdjacentHTML("beforeend", createMarkup(data.results));

        // if(data.page <= data.total_pages) {}
        if(data.page < 500) {
            selectors.loadBtn.classList.replace("load-more-hidden", "load-more");
        }
    })
    .catch(error => alert(error.message))

async function serviceMovie(page = 1) {
    const { data } = await axios(`${BASE_URL}${END_POINT}`, {
        params: {
            api_key: API_KEY,
            page
        }
    })
    console.log(data);
    return data;
}

function createMarkup(arr) {
    return arr.map(({ id, poster_path, original_title, release_date, vote_average }) => `
        <li class="movie-card" data-id="${id}">
            <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
            <div class="movie-info">
                <h2>${original_title}</h2>
                <p>Release Date: ${release_date}</p>
                <p>Vote Average: ${vote_average}</p>
            </div>
        </li>
    `).join("")
}

async function loadMore() {
    page += 1;

    selectors.loadBtn.disabled = true;

    try {
        const data = await serviceMovie(page);
        selectors.container.insertAdjacentHTML("beforeend", createMarkup(data.results));

        selectors.loadBtn.disabled = false;

        const card = document.querySelector(".movie-card");
        const cardHeight = card.getBoundingClientRect().height;

        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })


        if(data.page >= 500) {
            selectors.loadBtn.classList.replace("load-more", "load-more-hidden");
        }

    } catch(error) {
        alert(error.message);
    }
}


// --------------------------------------

// const selectors = {
//     container: document.querySelector(".js-movie-list"),
//     guard: document.querySelector(".js-guard")
// }

// let page = 1;

// let options = {
//     root: null,
//     rootMargin: "300px",
//     threshold: 0,
// };
  
// let observer = new IntersectionObserver(handlePagination, options);

// serviceMovie(page)
//     .then(data => {
//         selectors.container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//         if(data.page < 500) {
//             observer.observe(selectors.guard);
//         }
//     })
//     .catch(error => alert(error.message))


// async function serviceMovie(page) {
//     const response = await axios({
//         url: `${BASE_URL}${END_POINT}`,
//         params: {
//             api_key: API_KEY,
//             page
//         }
//     });

//     return response.data;
// }

// function createMarkup(arr) {
//     return arr.map(({ id, poster_path, original_title, release_date, vote_average }) => `
//         <li class="movie-card" data-id="${id}">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release Date: ${release_date}</p>
//                 <p>Vote Average: ${vote_average}</p>
//             </div>
//         </li>
//     `).join("")
// }


// function handlePagination(entries, observer) {
//     entries.forEach(async (entry) => {
//         if(entry.isIntersecting) {
//             page += 1
            
//             try {
//                 const movies = await serviceMovie(page);
//                 selectors.container.insertAdjacentHTML("beforeend", createMarkup(movies.results));

//                 if(movies.page >= 500) {
//                     observer.unobserve(entry.target);
//                 }

//             } catch(error) {
//                 alert(error.message);
//             }
//         }
//     })
// }
