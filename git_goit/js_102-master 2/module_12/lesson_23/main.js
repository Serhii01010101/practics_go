import axios from "axios";

import './style.css'

// const BASE_URL = "http://localhost:3000/todos";

// axios.get(BASE_URL)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message))
    

// axios(BASE_URL, {
//     params: {
//         limit: 2,
//         page: 5,
//     },
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message))



// axios.post(BASE_URL, {
//     title: "Купити хліб",
//     completed: false
// })
//     .then(({ data }) => console.log(data))
//     .catch(error => console.log(error))


// axios({
//     url: BASE_URL,
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     data: {
//         title: "Купити шоколад",
//         completed: false
//     }
// })
//     .then(({ data }) => console.log(data))
//     .catch(error => console.log(error))



// axios.put(`${BASE_URL}/388a`, {
//     completed: false
// })
//     .then((resposne) => console.log(resposne))
//     .catch(error => console.log(error))


// axios({
//     url: `${BASE_URL}/abcd`,
//     method: "PATCH",
//     data: {
//         completed: true
//     }
// })
//     .then(({ data }) => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log("ok"))



// axios.delete(`${BASE_URL}/388a`)
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))


// axios({
//     url: `${BASE_URL}/abcd`,
//     method: "DELETE"
// })
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))




// async function foo() {
//     try {
//         const { data } = await axios(BASE_URL);
//         container.insertAdjacentHTML("beforeend", JSON.stringify(data));
//     } catch(error) {
//         alert(error.message)
//     }
// }

// foo();



// async function foo() {
//     const response = await axios(BASE_URL);
//     return response.data;
// }

// foo()
//     .then(data => container.insertAdjacentHTML("beforeend", JSON.stringify(data)))
//     .catch(error => alert(error.message))



// async function foo() {
//     const response = await axios(BASE_URL);
//     return response.data;
// }

// async function render() {
//     try {
//         const data = await foo();
//         container.insertAdjacentHTML("beforeend", JSON.stringify(data))
//     } catch(error) {
//         alert(error.message)
//     }
// }

// render();



// ----------------------------

const BASE_URL = "http://localhost:3000/todos";

const form = document.querySelector(".todo__form");
const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);

render();

async function servcieTodos(options = {}) {
    const { data } = await axios(options);
    return data;
}

function createMarkup(arr) {
    return arr.map(({ id, title, completed }) => `
        <li class="list__item" data-id="${id}">
            <input type="checkbox" class="list__checkbox" ${completed && "checked"}>
            <h2 class="list__title">${title}</h2>
            <button class="list__btn">x</button>
        </li>
    `).join("")
}

async function render() {
    try {
        const todos = await servcieTodos({ url: BASE_URL });
        container.insertAdjacentHTML("beforeend", createMarkup(todos));
    } catch(error) {
        alert(error.message);
    }
}


async function handleSubmit(event) {
    event.preventDefault();

    const { todo } = event.target.elements;

    try {
        const myTodo = await servcieTodos({
            method: "POST",
            url: BASE_URL,
            data: {
                title: todo.value,
                completed: false
            }
        });
        container.insertAdjacentHTML("beforeend", createMarkup([myTodo]))
    } catch(error) {
        alert(error.message)
    } finally {
        form.reset();
    }
}

async function handleUpdate(event) {
    if(!event.target.classList.contains("list__checkbox")) {
        return;
    }

    event.preventDefault();

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;
    
    try {
        const todo = await servcieTodos({
            url: `${BASE_URL}/${id}`,
            method: "PATCH",
            data: {
                completed: event.target.checked
            }
        });

        event.target.checked = todo.completed;
    } catch(error) {
        alert(error.message)
    }
}

async function handleDelete(event) {
    if(!event.target.classList.contains("list__btn")) {
        return;
    }

    const parent = event.target.closest(".list__item");
    const id = parent.dataset.id;

    try {
        await servcieTodos({
            url: `${BASE_URL}/${id}`,
            method: "DELETE"
        })

        parent.remove();
    } catch(error) {
        alert(error.message);
    }
}

