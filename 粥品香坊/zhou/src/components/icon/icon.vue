<template lang='html'>
    <i class='icon' :class='setclass' :style='size'></i>
</template>
<script>
export default {
    name: 'icon',
    props: {
        url: {
            type: String,
            required: true
        },
        size: {
            type: Object,
            required: true
        }
    },
    computed: {
        setclass(){
            return 'icon-'+name;
        }
    }
}
</script>
<style lang="stylus">
    .icon{
        display: inline-block;
    }
    .icon.brand{
        background: url('../img/brand@2x.png');
    }
    .icon.bulletin{
        background: url('../img/bulletin@2x.png');
    }
    .icon.decrease{
        background: url('../img/decrease@2x.png');
    }
</style>