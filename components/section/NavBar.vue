
<script setup>
  import {ref, computed} from 'vue'
  const route = useRoute();

  const path = computed(() => {
    return route.path
  })

  const isPath = (linkPath) => {
    if(linkPath == path.value) {
      return true
    } else {
      return false
    }
  }
</script>

<template>
  <nav class="fixed bottom-0 w-full bg-white">

    <ul class="flex justify-around w-full px-4 py-2 border border-top border-grey">
      <li>
        <BaseLinkIcone link="/"  class="w-16 p-1 rounded-lg">
          <IconesHomeBold v-if="isPath('/')" />
          <IconesHome v-else/>
          <span class="text-xs text-dark">
            Accueil
          </span>
          
        </BaseLinkIcone>
      </li>

      <li>
        <BaseLinkIcone link="/qrcode"  class="w-16  p-1 rounded-lg">
          <IconesQrcodeBold v-if="isPath('/qrcode')" />
          <IconesQrcode v-else />
          <span class="text-xs">
            Scanner
          </span>
          
        </BaseLinkIcone>
      </li>
    </ul>
  </nav>
</template>