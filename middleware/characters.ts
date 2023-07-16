import { character } from "../types/starRails"

export default defineNuxtRouteMiddleware((to, from) => {


  const $characters = useCharacters()

  const { id } = to.params as { id: string }

  if (!$characters.characters.length || !($characters.characters[Number(id)])) {
    return navigateTo('/')
  }
})