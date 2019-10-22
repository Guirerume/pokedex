import axios from "axios";

export default {
  getPokemon({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(result => {          
        commit("setPokemon", result.data);
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      });
    });
  },
};
