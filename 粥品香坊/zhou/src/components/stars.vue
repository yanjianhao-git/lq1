<template lang='html'>
    <div class="stars">
        <img v-for="item,index of starsimg" :src="item">
    </div>
</template>
<script>
export default {
    name: 'stars',
    props: {
        size: {},
        fraction: {}
    },
    data(){
        return {
            starsimg: [],
            small: ['/static/img/star24_half@2x.png','/static/img/star24_on@2x.png','/static/img/star24_off@2x.png'],
            medium: ['/static/img/star36_half@2x.png','/static/img/star36_on@2x.png','/static/img/star36_off@2x.png'],
            big: ['/static/img/star48_half@2x.png','/static/img/star48_on@2x.png','/static/img/star48_off@2x.png']
        }
    },
    mounted() {
            let arr = [];
            if(this.size == '24') arr = this.small;
            if(this.size == '36') arr = this.medium;
            if(this.size == '48') arr = this.big;
            let num = parseInt(this.fraction);
            this.starsimg = [];
            for(let i = 0;i<num;i++){
                this.starsimg.push(arr[1]);
            }
            num = Math.round(this.fraction%1);
            if(num == 1) this.starsimg.push(arr[0]);
            let len = 5-this.starsimg.length;
            for(let i = 0;i<len;i++){
                this.starsimg.push(arr[2]);
            }
    }
}
</script>
<style lang='stylus'>

</style>

