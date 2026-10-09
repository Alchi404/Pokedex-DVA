const dialogRef = document.getElementById('detail-Dialog')
let dialogHead = document.getElementById('TestHeadline')
let baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
let limit = 20
let offset = 0
let allDataNormal = []
let filtertPokemon = []
let loadButton = document.getElementById("load-more")

function search() {
    let searchbar = document.getElementById("search-input")
    let searchText = searchbar.value.trim()
    let loadbutton = document.getElementById("load-more")
    let hint = document.getElementById("search-hint")
    if (searchText.length > 3) {
        filtertPokemon = []
        for (let i = 0; i < allDataNormal.length; i++) {
            if (allDataNormal[i].name.includes(searchbar.value.toLowerCase())) {
                filtertPokemon.push(allDataNormal[i])
            }
        }
        console.log(filtertPokemon);
        renderFilterPokemon();
        hint.classList.remove("d-block")
        loadbutton.classList.add("d-none");
    } else {
        hint.classList.add("d-block")
    }
}

async function renderFilterPokemon() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    if (filtertPokemon.length == 0) {
        contentRef.innerHTML += templatePokemonNotFound();
    }
    for (let i = 0; i < filtertPokemon.length; i++) {
        contentRef.innerHTML += templatePokemon(filtertPokemon[i]);
        checkType(filtertPokemon[i])
    }
}

async function init() {
    renderPokemon()
}

async function getData() {
    let response = await fetch(baseURL);
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

function loadMorePokemon() {
    loadButton.disabled = true;
    offset = offset + 20
    console.log(limit, offset);
    createURL(offset)
}

function createURL(offset) {
    baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    console.log(baseURL);
    renderPokemon()
}


async function renderPokemon() {
    await getData();
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    for (let i = 0; i < allDataNormal.length; i++) {
        contentRef.innerHTML += templatePokemon(allDataNormal[i]);
        checkType(allDataNormal[i])
    }
    loadButton.disabled = false;
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

    pokeBackground.classList.add(`${allDataNormal[pokemonid - 1].types[0].type.name}`)
    pokeTypeBackground1.classList.add(`${allDataNormal[pokemonid - 1].types[0].type.name}`)
    if (pokeTypeBackground2) {
        pokeTypeBackground2.classList.add(`${allDataNormal[pokemonid - 1].types[1].type.name}`)
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

function nextPokemon(pokemonid) {
    let ID = pokemonid + 1
    let checkID = allDataNormal.length + 1
    if (ID !== checkID) {
        openDialog(ID)
    }
}

function prevPokemon(pokemonid) {
    let ID = pokemonid - 1
    if (ID !== 0) {
        openDialog(ID)
    }
}


function closeDialog() {
    dialogRef.close()
}
