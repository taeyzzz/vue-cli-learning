<template>
  <v-text-field
    :type="type"
    :label="label"
    :value="value"
    @input="handleInputChanged"
  />
</template>

<script>
  export default {
    props: {
      label: String,
      value: [String, Number],
      onChange: {
        type: Function,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    methods: {
      handleBtnClicked(){
        this.onClick()
      },
      handleInputChanged(value){
        this.onChange(value)
      },
    }
  }
</script>

<style lang="scss">
  @import "./style.scss";
</style>
