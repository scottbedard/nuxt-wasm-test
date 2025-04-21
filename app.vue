<template>
  <div>
    {{ result }}
  </div>
</template>

<script lang="ts" setup>
import init from 'calculator'

const result = ref(0)

onMounted(async () => {
  const { add } = await init()

  result.value = add(234, 6)
})
</script>