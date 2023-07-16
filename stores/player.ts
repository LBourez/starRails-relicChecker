import { player } from "../types/starRails"

export const usePlayer = defineStore('player', {
  state: () => ({
    player: {} as player
  }),

  getters: {
  },

  actions: {
    setPlayer(player: player) {
      this.player = player
    }
  },
  persist: false
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePlayer, import.meta.hot))
}
