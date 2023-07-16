import { frontResponse } from '../types/request'

export const useAppState = defineStore('state', {
  state: () => ({
  }),

  getters: {
  },

  actions: {

    async getState(userId: string) {
      const $characters = useCharacters()
      const $player = usePlayer()

      const { data, pending, error, refresh } = await useFetch<frontResponse>('/api/account', {
        method: 'post',
        body: {
          id: userId
        }
      })

      const { success, player, characters } = data.value as frontResponse

      if (!success) {
        return 'error'
      }
      $characters.setCharacters(characters)
      $player.setPlayer(player)
      return 'success'
    }

  },
  persist: false
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppState, import.meta.hot))
}
