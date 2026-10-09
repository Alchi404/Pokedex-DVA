function templatePokemon(pokemon) {
    return /*html*/`
    <button class="poke-Preview" onclick="openDialog(${pokemon.id})" id="poke-Preview${pokemon.id}" data-id="card" role="button" aria-label="Open Card">
                <h2>${pokemon.name}</h2>
                <div class="poke-type-preview">
                    <ul>
                        <li id="poke-Preview-type1-${pokemon.id}">${pokemon.types[0].type.name}</li>
                        ${pokemon.types[1] ? `<li id="poke-Preview-type2-${pokemon.id}">${pokemon.types[1].type.name}</li>` : ""}
                    </ul>
                </div>
                <img src="${pokemon.sprites.back_default}" alt="" data-id="card-image">
</button>
    `;
}

function templatePokemonDialog(pokemonid) {
    return /*html*/`
            <section id="poke-dialog${pokemonid}">
                
                <div class="dialog-name-type-wrapper" data-id="overlay-pkemon-name">
                    <button onclick="closeDialog()" data-id="close-dialog" aria-label="Close">X</button>
                    <h3>${allDataNormal[pokemonid - 1].name}</h3>
                    <ul>
                        <li id="poke-dialog-type1${pokemonid}">${allDataNormal[pokemonid - 1].types[0].type.name}</li>
                        ${allDataNormal[pokemonid - 1].types[1] ? `<li id="poke-dialog-type2${pokemonid}">${allDataNormal[pokemonid - 1].types[1].type.name}</li>` : ""}
                    </ul>
                    <img src="${allDataNormal[pokemonid - 1].sprites.front_default}" alt="no sprite there :/" data-id="dialog-image">
                </div>
                <article class="dialog-info">
                    <div class="dialog-nav">
                        <h4>Stats</h4>
                    </div>

                    <div class="dialog-info-about">
                        <table>
                            <tr>
                                <th>HP :</th>
                                <td>${allDataNormal[pokemonid - 1].stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <th>attack :</th>
                                <td>${allDataNormal[pokemonid - 1].stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <th>defense :</th>
                                <td>${allDataNormal[pokemonid - 1].stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <th>speed :</th>
                                <td>${allDataNormal[pokemonid - 1].stats[5].base_stat}</td>
                            </tr>
                        </table>
                    </div>

                    <button class="prev-button" onclick="prevPokemon(${pokemonid})"><img src="./assets/Icon/arrow_left.png" alt=""></button>
                    <button class="next-button" onclick="nextPokemon(${pokemonid})"><img src="./assets/Icon/arrow_right.png" alt=""></button>
                </article>

            </section>
    `;
}

function templatePokemonNotFound(pokemon) {
    return /*html*/`
<div class="not-found">
                <img src="./assets/img/suprised-pikachu.webp" alt="pokeball pictogramm">
                <p>No Pokemon Found</p>
            </div>
    `;
}