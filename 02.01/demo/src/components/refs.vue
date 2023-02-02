<template>
    <div class="">
        {{ name }}
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: "ref的方法"
        }
    },
    methods: {
        someMethod (msg) {
            console.log(msg)
        }
    },

    created () { },
}
</script>

<style lang="scss" scoped>

</style>