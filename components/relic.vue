<template>
  <div class="grid h-min">
    <div class="flex">
      <div class="flex-none rounded-tr-lg mr-1 mb-1" :class="getBackgroundColor(relic.rarity)">
        <div class="w-16 h-16 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: 'url(../../assets/images/relic/' + getRelicImage(relic.name) + '.webp)'}"></div>
        <h1 class="flex justify-center h-fit bg-slate-800 text-sm">
          + {{ relic.level }}
        </h1>
      </div>
      <div class="flex w-full">  
        <h1 id="name">
          {{ relic.name }}
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

const getRelicImage = (relicName : string) : string => {
  return "Item_" + relicName.replaceAll(" ", "_").replaceAll("\'", "\\'");
}
</script>