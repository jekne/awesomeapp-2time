const res = ["Eszter", "Violeta", "Rein", "Danny"].map((name) => {
  return name.length;
});
console.log(res);

const all_pokemon = [
  { name: "Charizard" },
  { name: "Mewtwo" },
  { name: "Mega beedrill" },
];

const rest = all_pokemon.map((pokemon) => {
  return pokemon.name;
});
console.log(rest);
console.log(all_pokemon);

const all_pokemon1 = [
  { name: "Charizard", weight: 90 },
  { name: "Bulbasaur", weight: 6.9 },
  { name: "Mewtwo", weight: 122 },
  { name: "Mega beedrill", weight: 65 },
];

const weight = all_pokemon1.map((x) => {
  return x.weight;
});

const nameWeight = all_pokemon1.map((x) => {
  return `Name ${x.name}: ${x.weight} KG`;
});
console.log(weight);
console.log(all_pokemon1);
console.log(nameWeight);
