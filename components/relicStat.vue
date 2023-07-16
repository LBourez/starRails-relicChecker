<template>
  <div class="border grid">
    {{ statDisplay }}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { relicSubAffix } from '../types/starRails'
const { stats, type } = defineProps({
  stats: {
    type: Object as () => relicSubAffix,
    required: true
  },
  type: {
    type: String,
    required: true
  }

})

const statDisplay = computed(() => {
  const { display, name } = stats
  return `${type} : ${display} ${name}`
})
</script>