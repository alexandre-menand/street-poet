<script setup>
  defineProps({
    link: String
  })
</script>

<template>
    <NuxtLink :to="link" class="flex flex-col items-center">
    
      <slot />
    
  </NuxtLink>
</template>