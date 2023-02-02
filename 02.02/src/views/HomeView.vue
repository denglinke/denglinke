<template>
  <div class="home">
    <children :title="title" @getData="getData"></children>
  </div>
</template>

<script>
import children from '../components/children.vue'
export default {
  name: "",
  data () {
    return {
      title: "我是老六"
    }
  },
  components: {
    children
  },
  methods: {
    getData (value) {
      console.log(value);
    }
  },
  created () { },
}
</script>

<style lang="scss" scoped>

</style>