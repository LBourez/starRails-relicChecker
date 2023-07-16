<template>
  <div class="border-4 grid grid-rows-3">
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { character } from '../types/starRails'
const { character } = defineProps({
  character: {
    type: Object as () => character,
    required: true
  }
})
</script>