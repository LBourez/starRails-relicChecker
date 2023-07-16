<template>
  <div class="container grid">
    <input v-model="userId" />
    <button @click="fetch">
      Fetch data
    </button>

    <div v-if=" $characters.characters.length">
      <Character v-for="character in $characters.characters" :character="character">
      </Character>
    </div>
    <div v-else>
      {{ status }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const userId = ref('700638945')
const $state = useAppState()
const $characters = useCharacters()
const status = ref('idle')

async function fetch() {
  try {
    console.log('fetching data')
    status.value = 'loading'
    const stateStatus = await $state.getState(userId.value)
    status.value = stateStatus
  } catch (e) {
    console.log(e)
    status.value = 'error'
  }
}
</script>