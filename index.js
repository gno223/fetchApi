
async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Could Not Fetch")
        }
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
}