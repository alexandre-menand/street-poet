<script setup>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { ref} from 'vue'
import { storeQrcode } from '../../stores/qrcode';
import {storeToRefs} from 'pinia';

//router 
 const router = useRouter()
 const dataQrcode = storeQrcode()
 const { error, path } = storeToRefs(dataQrcode)


const onDecode = (a) => {
  dataQrcode.getQrcode(a)
  router.push({path: path.value});

 
}

const onLoaded = () => {
  console.log('loaded')
}
</script>

<template>
  <div>
    <div v-if="error" class="text-error text-xl-text-center font-bold">
      <p >Erreur : le QRcode n'est pas valide</p>
    </div>
   
      <StreamBarcodeReader @decode="(a) => onDecode(a)" @loaded="onLoaded"></StreamBarcodeReader>
    

  </div>



</template>
