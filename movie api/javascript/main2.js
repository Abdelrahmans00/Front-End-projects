let topRatedContainerMovie = [] ; 
let baseUrlMovie = `https://image.tmdb.org/t/p/w500/` ; 


async function getTopRatedMovie()
{
    let result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=58d950e9118a63dcbe31f2a9bf0bd084`)
    let finalResult = await result.json() ;
    topRatedContainerMovie = finalResult.results ;
    displayTopRatedMovie() ; 
    console.log('topRatedContainer' , topRatedContainerMovie) ; 
}


getTopRatedMovie(); 


function displayTopRatedMovie()
{
    let box = `` ; 
    for(let i =0 ; i< topRatedContainerMovie.length ; i++)
    {
        box+= ` <div class="col-md-3 mt-3">
                    <img class="w-100" src=${baseUrlMovie + topRatedContainerMovie[i].poster_path} alt="tv show">
                    <h4 class="text-warning">${topRatedContainerMovie[i].vote_average}</h4>
                    <h3 class="text-danger">${topRatedContainerMovie[i].title}</h3>
                    <p class="text-muted">${topRatedContainerMovie[i].overview}</p>
                </div>`
    }
    document.getElementById('posts').innerHTML = box ; 
}