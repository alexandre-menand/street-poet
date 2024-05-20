<script setup>
  defineProps({
    date: Date,
    text: String,
    author: String
  })

  const formatDate = (date) => {
    let formatDate = new Date(date)

    let options = { year: "numeric", month: "long", day: "numeric"};

    formatDate = new Intl.DateTimeFormat('fr-FR',options).format(formatDate)

    return formatDate
  }

</script>

<template>
  <article class="py-8  text-dark">
    <h2 class="pb-4 text-lg font-bold">
      {{formatDate(date)}}
    </h2>

    <p>
      {{ text }}
    </p>

    <p class="pt-4 LaBelleAurore text-3xl flex justify-end">
      {{author}}
    </p>
  </article>
</template>