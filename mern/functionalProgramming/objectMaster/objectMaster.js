const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

// an array of pokemon objects where the id is evenly divisible by 3
// const pId = pokemon.map(function (pokeId) {
//   if (pokeId.id % 3 == 0) {
//     console.log(pokeId.id);
//   }
// });

// an array of pokémon objects that are "fire" type
// const pFireType = pokemon.map((typeFire) => {
//   // console.log(typeFire.types);
//   // const fireType = typeFire.types.filter(
//   //   (filteredType) => filteredType === "fire"
//   // );

//   // console.log(typeFire.types);
//   if (typeFire.types[0] === "fire") {
//     console.log(typeFire);
//   }
// });

// an array of pokémon objects that have more than one type
// const typeMore = pokemon.filter((typePokem) => {
//   // console.log(typePokem.types.length);
//   if (typePokem.types.length > 1) {
//     console.log(typePokem);
//   }
// });

// an array with just the names of the pokémon
// const justNames = pokemon.map((name) => console.log(name.name));

// an array with just the names of pokémon with an id greater than 99
// const idNames = pokemon.filter((name) => {
//   // console.log(name.id);
//   return name.id > 99;
// });
// console.log(idNames);

// an array with just the names of the pokémon whose only type is poison
// const onlyType = pokemon.filter((value) => {
//   // console.log(value.types.length);
//   return value.types[0] === "poison" && value.types.length == 1 ? value : false;
// });
// console.log(onlyType);

// an array containing just the first type of all the pokémon whose second type is "flying"
// const onlyFirst = pokemon
//   .filter((value) => {
//     // console.log(value.types[0]);
//     return value.types[1] === "flying";
//   })
//   .map((value) => value.types[0]);
// // .map((value) => value.types[0]);

// console.log(onlyFirst);

// a count of the number of pokémon that are "normal" type
const normalType = pokemon.filter((value) => {
  return value.types.includes("normal");
  // console.log(hasNormal);
}).length;

console.log(normalType);
