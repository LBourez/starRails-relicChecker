<template>
  <div>
    <div class="flex inset-x-0 w-auto h-16 items-center m-4">
      <div class="self-start w-1/12">
        <div class="self-start w-16 h-16">
          <NuxtLink to="/">
            Back to home
          </NuxtLink>
        </div>
      </div>
      <div v-if="$characters.characters.length" class="flex flex-row flex-nowrap justify-center items-center w-10/12 gap-4">
        <NuxtLink :to="'/characters/' + index" v-for="(character, index) in $characters.characters">
          <div class="flex-none w-16 h-16 rounded-full border-2">
            {{ character.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const $characters = useCharacters()

</script>

<style scoped></style>