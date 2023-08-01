<template>
  <form class="w-full max-w-sm">
    <div class="flex items-center border-b border-purple-500 py-2">
      <input v-model="userId" type="text" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
      <button @click="fetch" type="button" class="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded">
        Fetch data
      </button>
      <div v-if="status" class="flex items-center py-2">
        {{ status }}
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const userId = ref('700638945')
const $state = useAppState()
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