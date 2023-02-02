<template>
  <div class="about">
    子传父<childs @fusss="getMsgFormSon"></childs><br>
    兄弟传值
    <child1 @name="getName"></child1>
    <child2 :value="value"></child2>
  </div>
</template>

<script>

import child1 from '../components/children1.vue'
import child2 from '../components/children2.vue'
import childs from '../components/children.vue'

export default {
  components: {
    childs,
    child1,
    child2
  },
  name: "",
  data () {
    return {
      value: '',
      msgFormSon: "this is msg"
    }
  },
  methods: {
    getMsgFormSon (data) {
      this.msgFormSon = data
      console.log(this.msgFormSon)
    },
    getName (val) {
      this.value = val
    }
  },
  created () {

  },
}
</script>

<style lang="scss" scoped>

</style>