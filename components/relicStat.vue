<template>
  <div class="grid grid-cols-7" :class="{ 'bg-slate-500 font-semibold text-orange-600' : type === 'MAIN' }">
    <div class="bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: 'url(../../assets/images/stats/' + getStatIcon(stats.name) + '.webp)'}"></div>
    <h2 class="col-span-5">
      {{ stats.name }}
    </h2>
    <h2 class="text-right pr-1">
      {{ stats.display }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
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

});

const getStatIcon = (statName : string) : string => {
  return statName.replaceAll(" ", "_");
}
</script>