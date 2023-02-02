<template>
    <div class="chile">
        父传子:{{ title }}
        <button @click="add">子传父</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    name: "",
    data () {
        return {};
    },
    methods: {
        add () {
            this.$emit('getData', '我想当老六')
        }
    },
    created () { },
};
</script>

<style lang="scss" scoped>

</style>
