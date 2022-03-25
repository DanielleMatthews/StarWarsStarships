export function allStarships(){
    return(
    fetch("https://swapi.dev/api/starships/")
    .then(res => {return res.json()}))
}