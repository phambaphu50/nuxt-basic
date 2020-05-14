<template>
  <div>
    Hello world
    {{ this.test }}
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      counter {{ getDataStore }}
    </div>

    <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    test: ""
  },
  computed: {
    getDataStore() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .el-button {
    &--primary {
      order: 1,
    }
  }
}
</style>
