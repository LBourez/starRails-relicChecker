import { character } from "../types/starRails"

export const useCharacters = defineStore('characters', {
  state: () => ({
    characters: [] as Array<character>
  }),

  getters: {
  },

  actions: {
    setCharacters(characters: Array<character>) {
      this.characters = characters
    }
  },
  persist: false
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacters, import.meta.hot))
}
