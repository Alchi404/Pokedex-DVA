const dialogRef = document.getElementById('detail-Dialog')
let dialogHead = document.getElementById('TestHeadline')

let pokemon = []
let allDataNormal = []

async function init() {
    renderPokemon()
}

async function renderPokemon () {
    const data = await getData();
    let contentRef = document.getElementById("content");
    let content = "";
    for (let i = 0; i < data.results.length; i++) {
        content += templatePokemon(allDataNormal[i]);
    }
    
    contentRef.innerHTML = content;
}

async function getData() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
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

function openDialog(i) {
    dialogRef.showModal();
    dialogHead.innerHTML = i.name;
}

function closeDialog() {
    dialogRef.close()
}


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