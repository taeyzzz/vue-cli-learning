<template>
  <div class="login-page">
    <div class="login-container">
      Status: {{ message }}
      <div class="input-container">
        <input-component
          type="text"
          :onChange="(value) => handleInputChanged(value, 'username')"
          :value="username"
        />
      </div>
      <div class="input-container">
        <input-component
          type="password"
          :onChange="(value) => handleInputChanged(value, 'password')"
          :value="password"
        />
      </div>
      <div class="btn-container">
        <button-component label="LOGIN" :onClick="handleLoginClicked"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '../../components/Button'
  import Input from '../../components/Input'

  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      'button-component': Button,
      'input-component': Input
    },
    mounted() {
      console.log('mounted', this.text) // I'm text inside the component.
      console.log(this.message);
      console.log(process.env);
      console.log(this.currentUser);
    },
    computed: mapState({
      message: state => state.loginPage.message,
      currentUser: state => state.loginPage.currentUser,
      loginStatus: state => state.loginPage.login.fetchStatus
    }),
    data: () => {
      return {
        username: "",
        password: ""
      }
    },
    watch: {
      loginStatus(newValue, oldValue){
        console.log(newValue, oldValue);
        console.log(this.$router);
        if(oldValue === "request" && newValue === 'success'){
          this.$router.push('/home')
        }
      }
    },
    methods: {
      ...mapActions({
        setMessage: 'setMessage',
        login: 'login'
      }),
      handleLoginClicked(){
        const data = {
          username: this.username,
          password: this.password
        }
        this.login(data)
      },
      handleInputChanged(value, type){
        this[type] = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
