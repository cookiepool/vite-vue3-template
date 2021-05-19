<template>
  <div class="test-wraper">
    <h2>测试页面</h2>
    <hr />
    <img src="/public/favicon.ico" alt="" />
    <hr />
    <div class="bg-box"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Test'
});
</script>

<style lang="scss" scoped>
.test-wraper {
  background-color: gray;
  h2 {
    color: red;
  }
  .bg-box {
    width: 200px;
    height: 200px;
    // background-image: url('../assets/logo.png');
    background-image: url('public/favicon.ico');
  }
}
</style>
