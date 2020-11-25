<template>
 <div class='calculation'> 
    <i class='icon-remove_circle_outline' @click='reduce' v-show='item.count'></i>
    <span v-show='item.count'>{{item.count}}</span>
    <i class='icon-add_circle' @click='plus'></i>
</div>
</template>
<script>
import bus from '../../bus.js';
export default{
	name: 'operation',
	props: {
		item: {
			type:Object,
			default: {}
		}
	},
	data(){
		return {
            
		}
	},
	mounted(){
		bus.$on('clear',data => {
            this.item.count = 0;
		})
	},
	methods: {
		plus(){
            if(!this.item.count){
            	this.$set(this.item,'count',1);
            }else{
            	this.item.count++;
            }
            bus.$emit('plus',this.item)
        },
        reduce(){
            this.item.count--;
			bus.$emit('reduce',this.item)
        }
	}
}
</script>
<style lang=stylus>
.calculation{
    display: flex;
    align-items: center;
    position: absolute;
    right: 18px;
    bottom: 18px;
    i{
        color: rgb(0,190,260);
        font-size: 24px;
    }
    span{
        display: inline-block;
        width: 24px;
        text-align: center;
    }
}
</style>