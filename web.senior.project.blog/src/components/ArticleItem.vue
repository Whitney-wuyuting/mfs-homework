<template>
  <div class="article-item">
    <h3>{{data.title}}</h3>
    <div class="desc">
        <span class="target">{{data.target}}</span>
        <span class="circle"></span>
        <span class="date">{{data.date}}</span>
        <span class="circle"></span>
        <span class="click-times">浏览 {{data.clickTimes}}</span>
    </div>
    <div class="content" v-if="showDetail">{{data.content}}</div>
    <div class="content" v-if="!showDetail">{{data.content | clip}}</div>
    <div v-if="!showDetail" class="view-article"><router-link to="/article/1">查看文章</router-link></div>
  </div>
</template>

<script>
export default {
  props: {
    showDetail: {
      type: Boolean,
      default: false
    },
    data: {
      required: true,
      type: [Object, Array]
    }
  },
  data () {
    return {
    }
  },
  filters: {
    clip(string, num = 100){
      if (string.length > num) {
        return string.substr(0, num)
       } else {
          return string
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.article-item
    h3
        text-align center
    .desc
        display flex
        justify-content center
        align-items center
        .circle
            display block
            height 4px
            width 4px
            background-color black
            border-radius 50%
        .target,.date,.click-times
            color gray
            font-size 14px
            margin 0 5px
    .view-article
        margin 20px
        text-align center
        a
            color #000
            text-decoration none
            &:after
                content "|"
                display inline-block
                margin 0 10px
                font-weight 700
            &:before
                content "|"
                display inline-block
                margin 0 10px
                font-weight 700
    .content
        margin-top 20px
        line-height 1.3
</style>
