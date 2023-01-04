const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// Lista de Pokemons divisibles por 3
const divisiblesPor3 = pokemon.filter(item => item.id % 3 === 0)
console.log(divisiblesPor3)

// // Pokemons Tipo Fuego
const pokemonsTipoFuego = pokemon.filter(item => item.types.includes('fire'))
console.log(pokemonsTipoFuego)

// Pokemons con mas de un tipo
const pokemonsManyTypes = pokemon.filter(item => item.types.length > 1)
console.log(pokemonsManyTypes)

// // Matriz con solo los nombres de los Pokemon
const pokemonPorNombre = pokemon.map(item => item.name)
console.log(pokemonPorNombre)

// // Matriz con solo los nombres de los Pokemon con id mayor a 99
const pokemonPorNombreYId = pokemon.map(item => {
    if (item.id > 99) return item.name
}).filter(x => x !== undefined)
console.log(pokemonPorNombreYId)

// Pokemones unico tipo Veneno
const pokemonTypePoison = pokemon
    .filter(item => (item.types.length === 1 && item.types[0]) === 'poison')
    .map(x => x.name)
console.log(pokemonTypePoison)

// Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const pokemonFiltered = pokemon.filter(item => item.types.includes('flying')).map(x => x.types[0])
console.log(pokemonFiltered)

// Recuento de pokemones tipo normal
const normalPokemons = pokemon.reduce((acc, value) => acc + value.types.includes('normal'), 0)
console.log(normalPokemons)