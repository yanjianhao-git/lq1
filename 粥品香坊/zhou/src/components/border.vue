<template>
    <div class="border">
        <span class="left"></span>
        <p>{{value}}</p>
        <span class="right"></span>
    </div>
</template>
<script>
export default {
    name: 'border',
    props: {
        value: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="stylus">
.border{
    display: flex;
    align-items: center;
    padding: 0 36px;
    margin-top: 28px;
    span{
        display: inline-block;
        flex: 1;
        border-top: 2px solid rgba(255,255,255,0.2);
    }
    p{
        margin: 0 12px;
        font-size: 14px;
        font-weight: 700;
        color: rgb(255,255,255);
    }
}
</style>


