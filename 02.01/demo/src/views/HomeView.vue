<template>
  <div class="home">
    双向绑定<input type="text" v-model="name">
    <br>
    <br>
    <sons :inputName="name" :sons="sons"></sons>
    <br>
    <refs ref="child"></refs>
    <br>
    <slots v-slot="slotProps">
      {{ slotProps.user.name }}
    </slots>
    <br>
    <getlist></getlist>
  </div>
</template>

<script>
import sons from '../components/son.vue'
import refs from '../components/refs.vue'
import slots from '../components/slot.vue'
import getlist from '../components/getlist.vue'
export default {
  name: "",
  components: {
    sons,
    refs,
    slots,
    getlist
  },
  data () {
    return {
      name: "",
      sons: "父传子",
    }
  },
  methods: {

  },
  created () {
    localStorage.setItem('names', '我是老六')
  },
  mounted () {
    // ref
    const child = this.$refs.child
    console.log(child.name)
    child.someMethod("调用了子组件的方法")
  }
}
</script>

<style lang="scss" scoped>

</style>