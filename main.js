const main = document.querySelector('.main .container')

function getData () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((post) => {
                main.innerHTML += `
                    <div class="card">
                        <img src="news.png" />  
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        
                    </div>
                `
            })
        })
}

getData()
