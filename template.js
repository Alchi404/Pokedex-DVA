function templatePokemon(pokemon) {
  return `
    <article class="poke-Preview" onclick="openDialog(${pokemon.id})">
                <h2>${pokemon.name}</h2>
                <div class="poke-type-preview">
                    <ul>
                        <li>${pokemon.types[0].type.name}</li>
                        ${pokemon.types[1] ? `<li>${pokemon.types[1].type.name}</li>` : ""}
                    </ul>
                </div>
                <img src="${pokemon.sprites.front_default}" alt="">
            </article>
    `;
}