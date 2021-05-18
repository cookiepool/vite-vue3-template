<template>
  <div class="test-wraper">
    <h2>测试页面</h2>
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
}
</style>
