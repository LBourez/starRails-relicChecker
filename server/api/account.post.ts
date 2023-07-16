import { H3Event } from 'h3'
import { mihomoRequest } from '../../types/request'
export default defineEventHandler(async (event: H3Event) => {

  const { id } = await readBody(event)

  try {
    const data : mihomoRequest = await $fetch(`https://api.mihomo.me/sr_info_parsed/${id}?lang=en`, {
      method: 'GET'
    })

    const { player, characters } = data
    return {
      success: true,
      player,
      characters
    }

  } catch (e) {

    console.log(e)

    return {
      success: false,
    }
  }

})