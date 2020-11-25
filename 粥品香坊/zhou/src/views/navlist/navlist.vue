<template lang='html'>
    <div class='nav'>
        <scroll>
            <ul class='list'>
                <li v-for='item,index in val'
                    @click='fn(index)'
                    :class='{on: index==curIndex}'
                ><span>{{item.name}}</span></li>
            </ul>
        </scroll>
        <scroll class='commodity' ref='rights'>
            <div class='bs'>
                <div class='item-box' v-for='item,index in val' ref='foodlist'>
                    <p class='nav-title'>{{item.name}}</p>
                    <ul class='list-bor' v-for='item1,index in item.foods'>
                        <li>
                            <img v-lazy='item1.image' @click='getshow(item1)'>
                            <ul class='commodity-title'>
                                <li class='first' @click='getshow(item1)'>
                                    {{item1.name}}
                                </li>
                                <li v-if='item1.description'>
                                    {{item1.description}}
                                </li>
                                <li>
                                    月售{{item1.sellCount}}份
                                    好评率{{item1.rating}}%
                                </li>
                                <li class='last'>
                                    ￥{{item1.price}}
                                </li>
                            </ul>
                           <operation :item='item1'></operation>
                        </li>
                        <p class='border'></p>
                    </ul>
                </div>
            </div>
        </scroll>
        <shop :show='show' :details='item' @changeType='back'></shop>
    </div>
</template> 
<script> 
    import axios from 'axios';
    import BScroll from 'better-scroll';
    import bus from '../../bus.js';
    import operation from '../operation/operation.vue';
    import scroll from '@/components/scroll.vue';
    import shop from '../shop/shop.vue';
    export default {
        name: 'goods',
        data(){
            return {
                val: {},
                bs: {},
                heightArr: [],
                scrollY: '',
                show: false,
                item: {}
            }
        },
        components: {
            operation,
            scroll,
            shop
        },
        created(){
            setTimeout(()=>{
                this.calc();
                this.init();
            }, 1200);
            axios({
                url:'/apis/goods',
            }).then(res => {
                this.val = res.data
            })
        },
        computed: {
            curIndex(){
                for(let i = 0;i<this.heightArr.length;i++){
                    let height1 = this.heightArr[i];
                    let height2 = this.heightArr[i+1];
                    if(this.scrollY >= height1 && this.scrollY < height2){
                        return i;
                    }
                }
                return 0;
            }
        },
        methods: {
            init(){
               /* this.bs = new BScroll(this.$refs.right,{
                    click: true,
                    probeType: 3
                })*/
                this.bs = this.$refs.rights.bs;
                this.bs.on('scroll',(pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y))
                })
            },
            getshow(item){
                this.show = true;
                this.item = item;
            },
            calc(){
                let height = 0;
                this.heightArr.push(height);
                let foodList = this.$refs.foodlist;
                for(let i = 0;i< foodList.length;i++){
                    height += foodList[i].clientHeight;
                    this.heightArr.push(height);
                }
            },
            fn(index){
                let foodList = this.$refs.foodlist;
                this.bs.scrollToElement(foodList[index],300);
            },
            back(res) {
                this.show = res;
            }
        }
    }
</script>
<style lang="stylus">
    .nav{
        display: flex;
        .right1{
            width: 80px
            height: 450px;
            overflow: hidden;
            .list{
                li{
                    display: flex;
                    box-sizing: border-box;
                    width: 100%;
                    height: 70px;
                    font-size: 12px;
                    color: rgb(77,85,93);
                    font-weight: 200;
                    padding: 12px;
                    background: #f3f5f7;
                    border-bottom: 1px solid rgba(7,17,27,0.1);
                    span{
                        margin: auto;
                    }
                }
                .on{
                    background: #fff;
                    font-weight: 600;
                }
            }
        }
        .commodity{
            display: inline-block;
            box-sizing: border-box;
            flex: 1;
            width: 295px;
            height: 66vh;
            overflow: hidden;
            .bs{
                width: 295px;
            }
            .nav-title{
                box-sizing: border-box;
                border-left: 2px solid #d9dde1;
                height: 26px;
                padding-left: 14px;
                font-size: 12px;
                color: rgb(147,153,159);
                line-height: 26px;
                background: #f3f5f7;
            }
            .list-bor{
                position: relative;
                .border{
                    position: absolute;
                    bottom: 0;
                    width: 220px;
                    height: 1px;
                    background: rgba(7,17,27,0.1);
                }
                li{
                    padding: 18px;
                    img{
                        width: 52px;
                        vertical-align:text-top;
                    }
                    .commodity-title{
                        display: inline-block;
                        width: 140px;
                        vertical-align:text-top;
                        margin-left: 10px;
                        li{
                            padding: 0;
                            margin-bottom: 8px;
                            font-size: 10px;
                            color: rgb(147,153,159);
                            line-height: 10px;
                        }
                        .first{
                            font-size: 14px;
                            color: rgb(7,17,27);
                            line-height: 14px;
                        }
                        .last{
                            font-size: 14px;
                            color: red;
                            font-weight: 700;
                            line-height: 24px;
                        }
                    }


                }
            }
        }
    }
</style>
