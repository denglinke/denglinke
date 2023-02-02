<template>
    <div class="son">
        双向绑定<span>{{ inputName }}</span>
        <br>
        父传子：{{ sons }}
        <br>
    </div>
</template>

<script>
export default {
    props: {
        inputName: String,
        sons: String
    },
    name: "",
    data () {
        return {}
    },
    methods: {},
    created () { },
}
</script>

<style lang="scss" scoped>

</style>