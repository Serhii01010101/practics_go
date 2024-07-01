/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

const list = document.querySelector("ul");
const API_KEY = "43173775-fc7269b10cca3a5d436001063";

const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose"
})

fetch(`https://pixabay.com/api?${params}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
        list.insertAdjacentHTML("beforeend", createMarkup(data.hits))
    })
    .catch(error => alert(error))


function createMarkup(arr) {
    return arr.map(({ id, previewURL, tags }) => `
        <li data-id="${id}">
            <img src="${previewURL}" alt="${tags}" width="300">
        </li>
    `).join("")
}

 
// fetch("https://pixabay.com/api", {
//     headers: {
//         key: `${API_KEY}`
//     }
// })