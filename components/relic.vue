<template>
  <div class="grid h-min">
    <div class="flex">
      <div class="flex-none rounded w-14 h-14 m-1" :class="getBackgroundColor(relic.rarity)">
        {{ relic.rarity }}*
      </div>
      <div class="flex flex-col w-full">  
        <h1 id="name">
          {{ relic.name }}
        </h1>
        <h1 class="flex justify-end text-2xl">
          Lvl. {{ relic.level }}
        </h1>
      </div>
    </div>
    <div>
      <RelicStat :stats="relic.main_affix" :type="'MAIN'" >
      </RelicStat>
      <RelicStat v-for="stat in relic.sub_affix" :stats="stat" :type="'SUB'">
      </RelicStat>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { relic } from '../types/starRails'
const { relic } = defineProps({
  relic: {
    type: Object as () => relic,
    required: true
  }
})

const getBackgroundColor = (rarity: number): string => {
    switch (rarity) {
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