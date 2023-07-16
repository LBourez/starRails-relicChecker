<template>
  <div class="border grid">
    <div id="name">
      {{ relic.name }} {{ relic.rarity }}*
    </div>
    <div id="level">
      Level: {{ relic.level }}
    </div>
    <div id="stats">
      <div id="mainStat">
        <RelicStat :stats="relic.main_affix" :type="'MAIN'">
        </RelicStat>
      </div>
      <div id="subStats">
        <RelicStat v-for="stat in relic.sub_affix" :stats="stat" :type="'SUB'">
        </RelicStat>
      </div>
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
</script>