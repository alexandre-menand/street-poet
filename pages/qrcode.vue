<script setup>

definePageMeta({
  layout: 'home',
});

</script>

<template>
  <SectionMain class="h-full" >
      <h1 class="text-lg font-bold text-dark my-8 mx-auto">
        Scanner un QR Code Street Poet
      </h1>
      <client-only>
        <BaseQrcodeReader />
      </client-only>
      
  </SectionMain>

</template>
