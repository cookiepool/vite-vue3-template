<template>
  <div class="test-wraper">
    <h2>测试页面</h2>
    <hr />
    <img src="/public/favicon.ico" alt="" />
    <hr />
    <div class="bg-box"></div>
    <hr />
    <p>子组件</p>
    <child-test></child-test>
    <hr />
    <h2>ref/reactive</h2>
    <p>修改数据ref：{{ count }}</p>
    <button @click="modifyCount">点击修改</button>
    <ul>
      <li v-for="(item, idx) in list" :key="idx">{{ item }}</li>
    </ul>
    <button @click="modifyList">修改列表数据</button>
    <hr />
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <p>{{ obj.height }}</p>
    <button @click="modifyAge">修改年龄</button>
    <hr />
    <p ref="testRefs">测试$refs</p>
    <hr />
    <p>computed && watch</p>
    <p>computed结果数据：{{ computedData }}</p>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  toRef,
  toRefs,
  onMounted,
  computed,
  watch,
  watchEffect
} from 'vue';

import ChildTest from '../components/ChildTest.vue';

export default defineComponent({
  name: 'Test',
  components: {
    ChildTest
  },
  setup(props, context) {
    console.log(props);
    console.log(context);
    // $refs https://vue3js.cn/docs/zh/guide/composition-api-template-refs.html#%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8
    const testRefs = ref(null);

    // ref
    let count = ref(100);
    let list = ref([100, 200]);

    // reactive
    let obj = reactive({
      name: 'haha',
      age: 28,
      height: 170
    });

    // toRef、toRefs https://vue3js.cn/docs/zh/api/refs-api.html#torefs
    let toRefData = toRef(obj, 'age'); // 当我修改toRefData这个值的age时，obj对应的age也会修改，同时视图也会更新
    let toRefsData = toRefs(obj);

    // computed
    let computedData = computed(() => {
      return count.value * 2;
    });

    // watch
    watch(count, (newVal, preVal) => {
      console.log(newVal);
      console.log(preVal);
    });
    // watchEffect
    watchEffect(() => {
      console.log(count.value);
    });
    // onMounted
    onMounted(() => {
      console.log(testRefs);
    });
    const modifyCount = () => {
      count.value++;
    };
    const modifyList = () => {
      list.value[0] = 1000;
    };
    const modifyAge = () => {
      toRefData.value++;
      toRefsData.height.value++;
    };

    return {
      count,
      list,
      obj,
      testRefs,
      computedData,
      modifyCount,
      modifyList,
      modifyAge
    };
  }
});
</script>

<style lang="scss" scoped>
.test-wraper {
  background-color: #eee;
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
