export default {
  getPokemon(vm, id) {
    return vm.$store.dispatch('Data/Pokemon/getPokemon', id);
  }
};
  