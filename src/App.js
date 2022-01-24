import logo from "./logo.svg";
import "./App.css";
import Title from "./Compononents/Title";
import Pokemon from "./Compononents/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="row">
      <main>
        <Title content="WELKOME TO THE POKEMONS PAGE" />
      </main>
      {all_pokemon.map((pok, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <Pokemon
            name={pok.name}
            weight={pok.weight}
            terrifying={pok.terrifying}
            abilities={pok.abilities}
            awesome={pok.awesome}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
