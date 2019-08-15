<template>
  <button v-on:click="handleBtnClicked">{{ label }}</button>
</template>

<script>
  export default {
    props: {
      label: String,
      onClick: Function
    },
    methods: {
      handleBtnClicked(){
        this.onClick()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
