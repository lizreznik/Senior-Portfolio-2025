const vue_app = Vue.createApp({
      created() {
            fetch('gallery.json').then(response => response.json()).then(json => {
                  this.gallery = json
            })
      },
      data() {
            return {
                  gallery: [],
            }
      }

})
vue_app.mount("#vue_app")