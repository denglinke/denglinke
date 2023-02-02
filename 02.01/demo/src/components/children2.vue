<template>
    <div class="child2">
        子组件2
        <div>
            {{ value }} 提交了申请
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
}
</script>
<style lang="scss" scoped>
.child2 {
    width: 400px;
    height: 60px;
    margin: 0 auto;
    border: 1px solid #333;
}
</style>
