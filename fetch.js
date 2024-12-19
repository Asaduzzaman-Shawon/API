function username() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    for (const i of data) {
        const nam = i.name;
        const add = document.getElementById('ul')
        const main = document.createElement('li')
        main.innerText = nam
        add.appendChild(main)
    }
}
