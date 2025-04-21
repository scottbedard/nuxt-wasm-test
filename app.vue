<template>
  <div>
    <input type="number" v-model="a" />
    <input type="number" v-model="b" />
    {{ result }}
  </div>
</template>

<script lang="ts" setup>
import init from 'calculator'

const a = ref(0)
const b = ref(0)

const result = ref(0)

watch([a, b], async () => {
  const { add } = await init()

  result.value = add(a.value, b.value)
})
</script>