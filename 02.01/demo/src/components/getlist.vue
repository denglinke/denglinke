<template>
    <div class="">
        {{ value }}
    </div>
</template>

<script>
export default {
    name: "",
    data () {
        return {
            value: ""
        }
    },
    methods: {},
    created () {
        console.log('获取到数据了');
        this.value = localStorage.getItem('names')
    },
}
</script>

<style lang="scss" scoped>

</style>