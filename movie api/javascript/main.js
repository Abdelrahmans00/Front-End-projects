
let topRatedContainerSeries = [] ; 
let baseUrl = `https://image.tmdb.org/t/p/w500/` ; 

async function getTopRatedSeries()
{
    let result = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=58d950e9118a63dcbe31f2a9bf0bd084`)
    let finalResult = await result.json() ;
    topRatedContainerSeries = finalResult.results ;
    displayTopRated() ; 
    console.log('topRatedContainer' , topRatedContainerSeries) ; 
}

getTopRatedSeries(); 


function displayTopRated()
{
    let box = `` ; 
    for(let i =0 ; i< topRatedContainerSeries.length ; i++)
    {
        box+= ` <div class="col-md-3 mt-3">
                    <img class="w-100" src=${baseUrl + topRatedContainerSeries[i].poster_path} alt="tv show">
                    <h4 class="text-warning">${topRatedContainerSeries[i].vote_average}</h4>
                    <h3 class="text-danger">${topRatedContainerSeries[i].name}</h3>
                    <p class="text-muted">${topRatedContainerSeries[i].overview}</p>
                </div>`
    }
    document.getElementById('posts').innerHTML = box ; 
}