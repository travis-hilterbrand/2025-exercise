import { sleep } from "../utils";
import { Pokemon } from "./types";

export const getPokemon = async (id: string): Promise<Pokemon> => {
  await sleep(500); // simulate slow network
  const response = await fetch(`/pokemons/${id}`);
  return response.json();
};
export const feedPokemon = async (id: string): Promise<Pokemon> => {
  await sleep(1300); // simulate slow network
  const response = await fetch(`/pokemons/${id}/feed`, {
    method: "PUT",
  });
  return response.json();
};
