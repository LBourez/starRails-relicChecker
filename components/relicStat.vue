<template>
  <div class="grid grid-cols-6" :class="{ checkMain }">
    <div class="bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: 'url(../../assets/images/stats/' + underscore(stats.name) + '.webp)'}"></div>
    <h2 class="col-span-4">
      {{ stats.name }}
    </h2>
    <h2 class="text-right">
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

const checkMain = () : string => {
  if (type == "MAIN")
    return "bg-grey-400";
  return "";
}

const underscore = (statName : string) : string => {
  return statName.replaceAll(" ", "_");
}
</script>