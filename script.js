const dialogRef = document.getElementById('detail-Dialog')
let dialogHead = document.getElementById('TestHeadline')

let pokemon = []
let allDataNormal = []

async function init() {
    renderPokemon()
}

async function getData() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=41&offset=0");
    console.log("response1:", response);
    let data = await response.json();
    console.log("yes", data.results);


    for (let index = 0; index < data.results.length; index++) {
        let response = await fetch(data.results[index].url)
        let singleData = await response.json();
        allDataNormal.push(singleData);
    }
    console.log("normal fetch done!:", allDataNormal);
    return data;
}

async function renderPokemon() {
    const data = await getData();
    let contentRef = document.getElementById("content");
    let content = "";
    for (let i = 0; i < data.results.length; i++) {
        contentRef.innerHTML += templatePokemon(allDataNormal[i]);
        checkType(allDataNormal[i])
    }
    // contentRef.innerHTML = content; 
    // 
}

function checkType(pokemonid) {
    let pokeBackground = document.getElementById(`poke-Preview${pokemonid.id}`)
    let pokeTypeBackground1 = document.getElementById(`poke-Preview-type1-${pokemonid.id}`)
    let pokeTypeBackground2 = document.getElementById(`poke-Preview-type2-${pokemonid.id}`)
    pokeBackground.classList.add(`${pokemonid.types[0].type.name}`)
    pokeTypeBackground1.classList.add(`${pokemonid.types[0].type.name}`)
    if (pokeTypeBackground2) {
        pokeTypeBackground2.classList.add(`${pokemonid.types[1].type.name}`)
    }
}

function checkTypeDialog(pokemonid) {
    let pokeBackground = document.getElementById(`poke-dialog${pokemonid}`)
    let pokeTypeBackground1 = document.getElementById(`poke-dialog-type1${pokemonid}`)
    let pokeTypeBackground2 = document.getElementById(`poke-dialog-type2${pokemonid}`)

    pokeBackground.classList.add(`${allDataNormal[pokemonid].types[0].type.name}`)
    pokeTypeBackground1.classList.add(`${allDataNormal[pokemonid].types[0].type.name}`)
    if (pokeTypeBackground2) {
        pokeTypeBackground2.classList.add(`${allDataNormal[pokemonid].types[1].type.name}`)
    }

}

function openDialog(pokemonid) {
    let contentRef = document.getElementById("detail-Dialog");
    let content = "";
    content = templatePokemonDialog(pokemonid);
    contentRef.innerHTML = content;
        checkTypeDialog(pokemonid)
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close()
}

// Mehr Anzeigen mit < 30 display none ? 


// async function promiseAll() {
//     let response = await fetch(
//         "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"
//     );
//     console.log("response1:", response);
//     let data = await response.json();
//     console.log(data.results);
//     let responsesAsPromise = [];
//     for (let i = 0; i < data.results.length; i++) {
//         responsesAsPromise.push(getPokemonDetails(data.results[index]));
//     }
//     console.log("all promises", responsesAsPromise);
//     allDataResolved = await Promise.all(responsesAsPromise);
//     console.log("all promise resolved data:", allDataResolved);
//     console.log("promise all done");
// }