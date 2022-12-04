const key = 'api_key=5ec5e2a1c7e8d83302a468d15e1ed7c2';

const baseURL = `https://api.themoviedb.org/3`

const url = baseURL + `/discover/movie?sort_by=popularity.desc&` + key

const img = `https://image.tmdb.org/t/p/w500`



const data = fetch(url).then(response => {
    return response.json()
}).then(data =>{
    showMovies(data.results)
    console.log(data.results.length)
})


function showMovies (data){

    let dado = document.querySelector('.container');

    for(let i = 0; i < data.length; i++){

        dado.innerHTML += `
        <div class="card">
        <img src="${img + data[i].poster_path}" alt="img">
    
        <div class="move-info">
            <h3 class="title">${data[i].original_title}</h3>
            <p class="nota">Nota: ${data[i].vote_average}</p>
        </div>
    
    </div>
        
        `

    }




    console.log(img + data[2].poster_path)
}