//import { defineStore } from 'pinia'

export const storePoeme = defineStore('poeme', {
    state: () => ({ 
        api: 'https://73msgq7g.directus.app/items/',
        poemes: {},
        lieu: '',
        ville: '',
        lieuId: '',
        loading: false,
        traficCount: true

     }),

    actions: {

    async getPoeme (id) {
      this.loading = true
      this.addTrafic(id)
      try {

        let api = this.api +'poeme/?filter[lieu][_eq]='+ id + '&fields=lieu.nom_lieu,texte,auteur,date_created,lieu.nom_ville.nom_ville,lieu.id&sort=-date_created' 

        const result = await fetch(api);

        let resp = await result.json();

        this.poemes = resp.data;

        setTimeout(() => {
          this.loading = false
        }, "1000")

        } catch (error) {
          this.loading = false
            console.log(error)
        }
      },
    async getLieu (id) {
      try {

        const result = await fetch(this.api+ 'lieu/' + id + '?fields=nom_lieu, id,nom_ville.nom_ville');

        let resp = await result.json();

        this.lieu = resp.data.nom_lieu;

        this.lieuId = resp.data.id;

        this.ville = resp.data.nom_ville.nom_ville;

        } catch (error) {
            console.log(error)
        }
    },

    async addPoeme (texte, auteur) {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ texte: texte , auteur: auteur, lieu: this.lieuId })
        }

        const result = await fetch(this.api+'poeme/', requestOptions );
        const data = await result.json();

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    
    async addTrafic (id) {
      if(this.traficCount) {
        this.traficCount = false;
        try {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({lieu: id })
          }
          const result = await fetch(this.api+'trafic/', requestOptions );
        } catch (error) {
          console.log(error)
        }
      }

    }

  
    },
  })
