export default {
    setPokemon(state, payload) {
      let pokemon = {
        name: payload.name,
        image: payload.sprites.front_default
      };
      state.info = pokemon;
    },
  };
  