<script setup>
   import {storeToRefs} from 'pinia';
   import {computed, reactive} from 'vue';
   // STORE

   import { storePoeme } from '../../stores/poeme';

  //router 
   const route = useRoute()
   const router = useRouter();
   const idPage = route.params.id
   const dataPoeme = storePoeme()
   const { poemes, lieu , ville } = storeToRefs(dataPoeme)
   dataPoeme.getLieu(route.params.id)
  // donnnee formulaire

  const form = reactive({
    texte : "",
    auteur: ""
  })

  const submitForm = () => {
    if (form.texte.length > 0) {
      dataPoeme.addPoeme(form.texte, form.auteur)
      dataPoeme.getPoeme(idPage)
      router.push({path:'/manuscrit/'+idPage});
    } else {
      return
    }
  }

  const inputTexte = computed(() => {
    if(form.texte.length > 0) {
      return ''
    } else {
      return 'opacity-50'
    }
  })


</script>


<template>
  <div>
    <SectionMapCoordinate  class="sticky top-0 w-full " >
        {{lieu}} - {{ville}}
      </SectionMapCoordinate>
      <SectionMain class="h-full divide-y divide-dark mt-8">
        <form action="" method="post" >
          <!-- texte area -->
          <div class="flex flex-col w-full">
            <label for="texte" class="font-bold text-dark ">Mon texte</label>
            <textarea v-model="form.texte" name="texte" id="texte" rows="8" class="border-dark border p-2" ></textarea>
          </div>

          <!-- auteur -->
          <div class="flex flex-col w-full mt-8">

            <div class="flex justify-between ">
              <label for="auteur" class="font-bold text-dark ">Mon pseudo</label>
              <span class="text-sm opacity-50">optionnel</span>
            </div>
 
            <input v-model="form.auteur" type="text" name="auteur" id="auteur" class="p-2 border-dark border">
          </div>
          <BaseButton :class="' mt-8 '+ inputTexte" @click="submitForm">Ajouter mon texte</BaseButton>

        </form>

      </SectionMain>
  </div>

</template>