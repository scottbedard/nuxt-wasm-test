<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts" setup>
import { add } from 'calculator'

const result = ref(0)

onMounted(() => {
  result.value = add(1, 2)
})
</script>