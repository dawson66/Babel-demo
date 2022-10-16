<template>
  <button @click="buttonClick">点击</button>
</template>

<script>
 
export default {
  name: 'App',
  components: { 
  },
  methods: { 
    buttonClick() {
      console.log('click'); 
      if(DEBUG) { 
        console.log('开发环境下执行成功');
      }
    }
  }
}
</script>

<style>

</style>
