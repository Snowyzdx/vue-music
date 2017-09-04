<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" :data="disclist" ref="scroll">
      <div>
        <div class="slider-wrapper" v-if="recommends.length">
            <div class="slider-content">
              <slider ref="slider">
                  <div v-for="item in recommends">
                    <a :href="item.linkUrl">
                      <img :src="item.picUrl">
                    </a>
                  </div>
              </slider>
            </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">
            热门歌单推荐
          </h1>
          <ul>
              <li @click="selectItem(item)" v-for="item in disclist" class="item">
                  <div class="icon">
                      <img :src="item.imgurl" width="60" height="60">
                  </div>
                  <div class="text">
                    <h2 class="name" v-html="item.creator.name"></h2>
                    <p class="desc" v-html="item.dissname"></p>
                  </div>
              </li>
          </ul>
        </div>
      </div>
      <loading></loading>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script text="text/ecampscript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import Loading from 'base/loading/loading'
  import {getRecommend,getDiscList} from 'api/recommend.js'
  import {ERR_OK} from 'api/config.js'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return {
        recommends:[],
        disclist: []
      }
    },
    created(){
        this._getRecommend()
        this._getDiscList()
    },
    methods:{
      selectItem(item){
        this.$router.push({
          path:`/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
      _getRecommend(){
          getRecommend().then((res)=>{
            if(res.code===ERR_OK){
              this.recommends=res.data.slider
            }
          })
      },
      _getDiscList(){
        getDiscList().then((res)=>{
        if(res.code===ERR_OK){
          this.disclist=res.data.list
        }
        })
      },
      ...mapMutations({
        setDisc:'SET_DISC'
      })
    },
    components:{
      Slider,
      Scroll,
      Loading
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        height: 0
        padding-top: 40%
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: #D4303B
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: #fff
            .desc
              color: #999
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
