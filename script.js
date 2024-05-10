const url = 'https://v2.jokeapi.dev/joke/Any?type=single'


let joke = async ()=>{
    const response = await axios.get(url)
    let data = await response.data
    document.querySelector("#JokeText").textContent = data.joke;
}
document.querySelector("#JokeButton").addEventListener("click", joke)