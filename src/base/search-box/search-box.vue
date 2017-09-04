<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input class="box" v-model="query" :placeHolder="placeHolder"/>
    <i @click="clear" v-show="query" class="icon-dismiss"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
      props:{
        placeHolder:{
          type:String,
          default:'搜索歌曲，歌手'
        }
      },
      data(){
        return {
          query:''
        }
      },
      created(){
        this.$watch('query',(newQuery)=>{
          this.$emit('query',newQuery)
        })
      },
      methods:{
        clear(){
          this.query=''
        },
        setQuery(query){
          this.query=query
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: $color-background
    border-radius: 6px
    .icon-search
      font-size: 24px
      color: $color-highlight-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-background
      color: $color-text
      font-size: $font-size-medium
      outline: 0
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-highlight-background
</style>
