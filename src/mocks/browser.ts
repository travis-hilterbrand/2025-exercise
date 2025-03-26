import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { Pokemon } from "../api/types";

const pokemons: Pokemon[] = [
  {
    id: "bulbasaur",
    color: "tomato",
    name: "Bulbasaur",
  },
  {
    id: "charmander",
    color: "teal",
    name: "Charmander",
  },
  {
    id: "squirtle",
    color: "beige",
    name: "Squirtle",
  },
];

export const worker = setupWorker(
  http.get("/pokemons/:pokemonId", async ({ params }) => {
    const item = pokemons.find((item) => item.id === params.pokemonId);
    if (item) {
      return HttpResponse.json(item);
    }
    return new HttpResponse(null, { status: 404 });
  })
);
