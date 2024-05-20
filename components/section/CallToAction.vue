<script setup>
  defineProps({
    link: String
  })
</script>

<template>
  <section class="fixed w-full left-0 bottom-0 bg-white py-4 flex justify-center  border-t  border-grey">
    <BaseLink :link="link"> <IconesPen class="h-4"/> ajouter un texte</BaseLink>
  </section>
</template>