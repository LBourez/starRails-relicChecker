<template>
  <div>
    <div id="charSelect">
      <div v-if="$characters.characters.length">
        <NuxtLink :to="'/characters/' + index" v-for="(character, index) in $characters.characters">
          <div id="name">
            {{ character.name }} {{ character.rarity }}*
          </div>
        </NuxtLink>
        <NuxtLink to="/">
          Back to home
        </NuxtLink>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const $characters = useCharacters()

</script>

<style scoped></style>