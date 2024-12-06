let topActors = [] ; 
let baseUrlActors = `https://image.tmdb.org/t/p/w500/` ; 

async function getTopActors()
{
    let result = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=58d950e9118a63dcbe31f2a9bf0bd084`)
    let finalResult = await result.json() ;
    topActors = finalResult.results ;
    displayTopActors() ; 
    console.log('topActors' , topActors) ; 
}

getTopActors(); 


function displayTopActors()
{
    let box = `` ; 
    for(let i =0 ; i< topActors.length ; i++)
    {
        box+= ` <div class="col-md-3 mt-3">
                    <img class="w-100" src=${baseUrlActors + topActors[i].profile_path} alt="tv show">
                    <h4 class="text-warning">${topActors[i].name}</h4>
                    <h3 class="text-danger">${topActors[i].known_for_department}</h3>
                    <p class="text-muted">${topActors[i].popularity}</p>
                </div>`
    }
    document.getElementById('posts').innerHTML = box ; 
}