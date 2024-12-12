export async function getAllPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error fetching Pokemon:", error);
    return [];
  }
}
