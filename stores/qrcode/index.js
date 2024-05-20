

export const storeQrcode = defineStore('qrcode', {
    state: () => ({ 
        url: 'https://street-poet.netlify.app',
        loading:false,
        path: '',
        error : false

     }),

    actions: {

    getQrcode (url) {

      let hostname = new URL(url).hostname
      let Qrhostname = new URL(this.url).hostname

      if(hostname == Qrhostname){
        
        this.error = false
        this.path = url.slice(this.url.length)
        

      } else {
        this.error = true
      }

      }
  
    },
  })
