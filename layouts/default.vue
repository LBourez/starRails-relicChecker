<template>
  <div class="flex flex-col h-screen bg-gradient-to-br from-slate-800 to-slate-950">
    <div class="flex w-auto h-16 items-center m-4">
      <div class="self-start w-1/5">
        <div class="self-start w-16 h-16 text-white">
          <NuxtLink to="/">
            Back to home
          </NuxtLink>
        </div>
      </div>
      <div v-if="$characters.characters.length" class="flex flex-row flex-nowrap justify-center items-center w-3/5 gap-4 text-center">
        <NuxtLink :to="'/characters/' + index" v-for="(character, index) in $characters.characters">
          <div class="flex-none w-16 h-16 rounded-full" :class="getCharacterBackgroundColor(character.rarity)">
            {{ character.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const $characters = useCharacters()

let getCharacterBackgroundColor = (characterRarity: number): string => {
    switch (characterRarity) {
      case 5:
        return "bg-amber-300";
      case 4:
        return "bg-purple-800";
      case 3:
        return "bg-blue-800";
      case 2:
        return "bg-green-600";
      case 1:
        return "bg-neutral-500";
    
      default:
        return "bg-neutral-500";
    }
}
</script>

<style scoped></style>