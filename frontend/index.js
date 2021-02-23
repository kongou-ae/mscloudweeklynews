new Vue({
    el: '#app',
    data () {
      return {
        items: null
      }
    },
    filters: {
        unixTimeToData (value) {
            let dateTime = new Date(value);
            return dateTime.toLocaleDateString();
        }
      },
    mounted () {
      axios
        .get('https://cloudinfo.z01.azurefd.net/api/Items?code=Fcgn/2YL1HZ2PGnQ1t4Nfh3xezydt6va29ZMUGmYyGSlrT7id6fUIA==')
        .then(response => {
            
            this.items = response.data
        })
    }
  })