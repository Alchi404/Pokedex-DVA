const dialogRef = document.getElementById('detail-Dialog')

let pokemon = []

async function init() {
    let pokemon = await getData();
    console.log("Result from init: ", pokemon);
    // render(pokemon);
}

async function getData() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
    let data = await response.json();
    return data;
}

// function render(pokemon) {
//     let contentRef = document.getElementById("content");
//     let content = "";
//     for (let i = 0; i < pokemon.results.length; i++) {
//         content += templatePokemon(pokemon);
//     }
//     contentRef.innerHTML = content;
// }

function openDialog(index) {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close()
}
