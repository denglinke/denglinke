<template>
    <div class="child1">
        子组件1
        <div>
            <input v-model="value"></input>
            <button @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: ''
        }
    },
    methods: {
        submit () {
            this.$emit('name', this.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.child1 {
    width: 400px;
    height: 100px;
    margin: 0px auto;
    border: 1px solid #333;

    input {
        width: 200px;
    }
}
</style>
