import {
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_ERROR,
} from '../../contants/api.constant'

const startGetPokemon = () => {
  return { type: GET_POKEMONS_START }
}

const successGetPokemon = () => {
  return { type: GET_POKEMONS_SUCCESS }
}

const errorGetPokemon = () => {
  return { type: GET_POKEMONS_ERROR }
}

export const getPokemonsActions = () => {
  return (dispatch: any) => {
    try {
      dispatch(startGetPokemon())
    } catch (error) {
      dispatch(errorGetPokemon())
    }
  }
}
