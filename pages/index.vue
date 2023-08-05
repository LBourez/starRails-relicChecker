<template>
  <div class="flex justify-center items-center w-full">
    <div class="flex flex-col items-center justify-evenly w-1/3 h-1/2 rounded-3xl bg-gradient-to-br from-slate-600 to-slate-700">
      <div class="flex">
        <h1 class="text-white text-5xl">LOGIN</h1>
      </div>
      <div class="flex items-center border-b border-slate-900 py-2">
        <div class="text-slate-900 text-lg">UID</div>
        <input v-model="userId" type="text" class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" />
        <button @click="fetch" type="button" class="flex-shrink-0 bg-slate-900 hover:bg-slate-800 border-slate-900 hover:border-slate-800 border-4 text-white py-1 px-2 rounded">
          Fetch data
        </button>
      </div>
    </div>
  </div>
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