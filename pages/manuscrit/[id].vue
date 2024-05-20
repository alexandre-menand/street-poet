<script setup>    

   import {storeToRefs} from 'pinia';
   // STORE

   import { storePoeme } from '../../stores/poeme';

  //router 
   const route = useRoute()
   const dataPoeme = storePoeme()
   const { poemes, lieu , ville, loading } = storeToRefs(dataPoeme)
   dataPoeme.getPoeme(route.params.id)
   dataPoeme.getLieu(route.params.id)
</script>

<template>
  <div>
    <Transition>
      <BaseLoading v-if="loading"/>
    </Transition>
   
    <div v-if="loading == false">
      <SectionMapCoordinate  class="sticky top-0 w-full " >
          {{lieu}} - {{ville}}
        </SectionMapCoordinate>
      <SectionMain class="h-full divide-y divide-dark" v-if="poemes.length != 0">

              <CardPoeme 
                v-for="item in poemes"
                :key="item.id"
                :date="item.date_created"
                :text="item.texte"
                :author="item.auteur"
              />
            
      </SectionMain>
      <SectionCallToAction :link="'/ajouter/'+$route.params.id" v-if="poemes.length != 0"/>
      <SectionMain class="h-full" v-else>
            <SvgGirlRead class="h-32 w-auto mt-16" />

            <h1 class="text-lg font-bold text-dark mb-4">
              Soyez le premier à écrire l’histoire de ce lieu
            </h1>
            <p class="text-dark text-sm">Poèmes, textes, anecdotes ... la seule limite est votre imagination</p>
            <BaseLink :link="'/ajouter/'+$route.params.id" class="mt-12">Ecrire le premier texte</BaseLink>
      </SectionMain>
    </div>

  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>