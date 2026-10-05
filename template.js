function templatePokemon(pokemon) {
  return /*html*/`
    <article class="poke-Preview" onclick="openDialog(${pokemon.id})" id="poke-Preview${pokemon.id}">
                <h2>${pokemon.name}</h2>
                <div class="poke-type-preview">
                    <ul>
                        <li id="poke-Preview-type1-${pokemon.id}">${pokemon.types[0].type.name}</li>
                        ${pokemon.types[1] ? `<li id="poke-Preview-type2-${pokemon.id}">${pokemon.types[1].type.name}</li>` : ""}
                    </ul>
                </div>
                <img src="${pokemon.sprites.front_default}" alt="">
            </article>
    `;
}

function templatePokemonDialog(pokemonid) {
  return /*html*/`
            <section id="poke-dialog${pokemonid}">
                <button onclick="closeDialog()">X</button>
                <div class="dialog-name-type-wrapper">
                    <h3>${allDataNormal[pokemonid-1].name}</h3>
                    <ul>
                        <li id="poke-dialog-type1${pokemonid}">${allDataNormal[pokemonid].types[0].type.name}</li>
                        ${allDataNormal[pokemonid].types[1] ? `<li id="poke-dialog-type2${pokemonid}">${allDataNormal[pokemonid].types[1].type.name}</li>` : ""}
                    </ul>
                    <img src="${allDataNormal[pokemonid-1].sprites.front_default}" alt="">
                </div>
                <article class="dialog-info">
                    <div class="dialog-nav">
                        <p>Basic stats</p>
                        <p>test</p>
                        <p>test</p>
                    </div>

                    <div class="dialog-info-about">
                        <table>
                            <tr>
                                <th>HP :</th>
                                <td>${allDataNormal[pokemonid].stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <th>attack :</th>
                                <td>${allDataNormal[pokemonid].stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <th>defense :</th>
                                <td>${allDataNormal[pokemonid].stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <th>speed :</th>
                                <td>${allDataNormal[pokemonid].stats[5].base_stat}</td>
                            </tr>
                        </table>
                    </div>

                    <img src="./assets/Icon/arrow_left.png" alt="" class="prev-button">
                    <img src="./assets/Icon/arrow_right.png" alt="" class="next-button">
                </article>

            </section>
    `;
}