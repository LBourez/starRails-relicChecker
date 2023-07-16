<template>
  <div class="container grid">
    <input v-model="userId" />
    <button @click="fetch">
      Fetch data
    </button>

    <div v-if="charactersData">
      <Character v-for="character in charactersData" :character="character">
      </Character>
    </div>
    <div v-else>
      {{ status }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { frontResponse } from '../types/request'
const userId = ref('700638945')
const playerData = ref<{} | null>(null)
const charactersData = ref<{} | null>(null)
const status = ref('idle')

async function fetch() {
  try {
    console.log('fetching data')
    status.value = 'loading'
    const { data, pending, error, refresh } = await useFetch<frontResponse>('/api/account', {
      method: 'post',
      body: {
        id: userId.value
      }
    })

    const { success, player, characters } = data.value as frontResponse
    if (!success) {
      status.value = 'error'
      return
    }
    playerData.value = player
    charactersData.value = characters
  } catch (e) {
    console.log(e)
    status.value = 'error'
  }
}
</script>