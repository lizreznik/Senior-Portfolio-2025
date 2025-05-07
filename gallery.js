const vue_app = Vue.createApp({
    // This automatically imports your movies.json file and puts it into
    //   the variable: movies
    created() {
          fetch('movies.json').then(response => response.json()).then(json => {
                this.movies = json
          })
    },
    data() {
          return {
                // This holds your movies.json data.
                projects: [],
          }
    }
}) 