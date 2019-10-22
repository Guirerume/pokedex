<template>
  <div width="100vw" class="d-flex flex-row align-center justify-center">
    <div v-if="pokemon && !loading" class="d-flex flex-column align-space-between justify-space-between pokedex-container">
        <div class="d-flex flex-row align-start justify-space-around">
            <img class="pokedex-image" :src="pokemon.image" />
            <h1 class="pokedex-name">{{pokemon.name}}</h1>
        </div>

      <div class="d-flex align-end justify-space-between">
        <v-btn :disabled="id < 2"@click="previousPokemon()"> <<< </v-btn>
        <v-btn @click="nextPokemon()"> >>> </v-btn>
      </div>
    </div>
    <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script>
import PokemonService from "@/services/pokemonService.js";
export default {
  data: () => {
    return {
      pokemon: null,
      loading: true,
      id: 1
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    nextPokemon() {
        this.id++;
        this.getPokemon();
    },
    previousPokemon() {
        this.id--;
        this.getPokemon();
    },
    getPokemon() {
      this.loading = true;
      this.pokemon = null;
      PokemonService.getPokemon(this, this.id)
        .then(() => {
          this.pokemon = this.$store.state.Data.Pokemon.info;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>


<style>
.pokedex-container {
    height: 50vh;
    width: 60vw;
    background: red;
    margin: 2vh;
    padding: 5vh 0vw;
    border-style: solid;
}
.pokedex-image {
    width: 20vw;
    height: 20vh;
    background: white;
    border-style: inset;
}

.pokedex-name {
    font-size: 16px;
    background: white;
    color: black;
    width: 15vw;
    height: 4vh;
    text-transform: uppercase;
    border-style: inset;
}
</style>
