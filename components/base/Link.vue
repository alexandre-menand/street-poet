<script setup>
  defineProps({
    link: String
  })
</script>
<template>
  <NuxtLink :to="link" class="font-bold px-8 py-3 rounded-full bg-accent text-dark flex justify-center items-center">
    
    <slot />
    
  </NuxtLink>
</template>