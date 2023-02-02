
<template>
    <div class="app">
        <input @click="sendMsg" type="button" value="给父组件传递值">
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: "我是子组件的msg",
        }
    },
    methods: {
        sendMsg () {
            this.$emit('fusss', this.msg)
        }
    }
}
</script>
