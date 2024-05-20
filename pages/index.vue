<script setup>
  definePageMeta({
    layout: 'home',
  });

</script>

<template>
<header class=" mt-24 mb-32 max-w-2xl mx-auto">
  <h1 class="text-4xl text-center mx-2 font-bold text-dark leading-relaxed">
    Lisez des histoires et écrivez la vôtre dans un lieu public.
  </h1>

</header>
<SectionMain class="mb-32">
  <div class="my-16 flex flex-col justify-center items-center ">
    <SvgManScanne class="w-auto h-64"/>
    <h2 class="mt-4 text-center font-bold text-dark mb-4 text-xl">
      Scannez un QR Code Street Poet dans un lieu
    </h2>
  </div>

  <div class="my-16 flex flex-col justify-center items-center ">
    <SvgGirlRead class="w-auto h-64"/>
    <h2 class="mt-4 text-center font-bold text-dark mb-4 text-xl">
      Lisez les histoires, poèmes et anecdotes des autres passants 
    </h2>
  </div>

  <div class="my-16 flex flex-col justify-center items-center ">
    <SvgGirlDance class="w-auto h-64"/>
    <h2 class="mt-4 text-center font-bold text-dark mb-4 text-xl">
      Laissez un message pour les prochains passants 
    </h2>
  </div>


</SectionMain>
</template>
