<template>
  <div v-if="character" class="grid grid-rows-1 grid-cols-2 gap-4 w-full h-auto mx-40 my-20 text-white">
    <div>
      <div id="name">
        {{ character.name }} {{ character.rarity }}*
      </div>
      <div id="level">
        Level: {{ character.level }}
      </div>
      <div id="ascension">
        Ascension: {{ character.promotion }}
      </div>
    </div>
    <div class="grid grid-rows-3 grid-cols-2 gap-4">
      <Relic v-for="relic in character.relics" :relic="relic">
      </Relic>
    </div>
  </div>
  <div v-else>
    not found
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'characters'
})

import { ref, computed } from 'vue'
import { character } from '../../../types/starRails'

const $characters = useCharacters()

const route = useRoute()
const { id } = route.params

const character = computed(() => {
  return $characters.characters[Number(id)] as character
})
</script>