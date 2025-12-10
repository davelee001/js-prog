fetch_data()
async function fetch_data() {
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          if(!response.ok){
        throw new Error("what ur looking for is wrong");
    }
    const data = await response.json();
    console.log(data)
    const pokemanpic = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonName")
    imgElement.src = pokemanpic;
    imgElement.style.display = "block";


    }
    catch(error){
        console.error(error);

    }
    
}

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok){
        throw new Error("what ur looking for is wrong")
    }
    return response.json()
})
.then(data => console.log(data.name))
.catch(error => console.log(error))
*/