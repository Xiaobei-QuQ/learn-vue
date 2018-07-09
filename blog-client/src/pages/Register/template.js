import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(['register']),

    onRegister() {
      this.register({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: '/'})
        })
    }
  }
}
