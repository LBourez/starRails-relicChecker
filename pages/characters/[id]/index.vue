<template>
  <div class="flex w-full h-full justify-center">
    <div class="flex w-9/12 rounded-3xl bg-gradient-to-br from-slate-600 to-slate-700 my-10 p-10">
      <div v-if="character" class="grid grid-rows-1 grid-cols-2 gap-4 w-full h-full text-white">
        <div class="bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: 'url(../../assets/images/character/' + getCharacterSplashArt(character.name) + '.webp)'}">
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
    </div>
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

const getCharacterSplashArt = (characterName : string) : string => {
  return "Character_" + characterName.replaceAll(" ", "_") + "_Splash_Art";
}
</script>