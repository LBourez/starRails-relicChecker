<template>
  <div class="border-4 grid grid-rows-3" v-if="character">
    <div id="name">
      {{ character.name }} {{ character.rarity }}*
    </div>
    <div id="level">
      Level: {{ character.level }}
    </div>
    <div id="ascension">
      Ascension: {{ character.promotion }}
    </div>
    <div id="relics">
      <Relic v-for="relic in character.relics" :relic="relic" class="row">
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
import { character } from '../../types/starRails'

const $characters = useCharacters()

const route = useRoute()
const { id } = route.params

const character = computed(() => {
  return $characters.characters[id] as character
})
</script>