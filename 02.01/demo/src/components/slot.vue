<template>
    <div>
        <slot :user="user"></slot>
    </div>
</template>

<script>
export default {
    name: "",
    data () {
        return {
            user: { name: "插槽的方法" }
        }
    },

    methods: {},
    created () { },
}
</script>

<style lang="scss" scoped>

</style>