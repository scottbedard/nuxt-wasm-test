<template>
  <div>
    {{ Hexchess.init().toString()}} - <button @click="x++">{{ x }}</button>
  </div>
</template>

<script lang="ts" setup>
import { Hexchess } from '@bedard/hexchess';

const x = ref(0);
</script>