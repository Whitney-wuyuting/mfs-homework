<template>
  <div class="main">
    <div class="col md-8 list">
      <article-item :show-detail="true" :data="article"></article-item>
    </div>
    <div class="col md-4 xs-10">
      <latest-article :data="latestArticles"></latest-article>
      <archive :data="archives"></archive>
      <target :data="targets"></target>
    </div>
  </div>
</template>

<script>
import LatestArticle from '../components/LatestArticle.vue'
import Archive from '../components/Archive.vue'
import Target from '../components/Target.vue'
import ArticleItem from '../components/ArticleItem.vue'
export default {
  components: {
    LatestArticle,
    Archive,
    Target,
    ArticleItem
  },
  name: 'article',
  data () {
    return {
      article: {
        id: 1,
        title: '文章名字1',
        target: '前端',
        date: '2017/1/17',
        clickTimes: '100',
        content: `随着屏幕的大小变换，内容区域的元素会匹配屏幕重新布局，就是我们说的自适应效果。我们在.col列中追加class类就可以实现自适应效果
        如超小屏幕(xs)、超大屏幕(xl)。栅格系统首先会匹配移动手机版小屏幕，所以每个.col都需要一个class如:.XS-*，这样的话如果大屏幕的类没有设置，它就会使用这个.xs-*。
        本文不会探讨单元测试方向，因为单测已经有完善的工具体系。但前端开发中，除了一些框架和库，愿意去写单测的少之又少。另外单测维护成本较高，而且也没法满足前端测试的所有需求。
        用户可以基于tag来快速筛选感兴趣的文章，文章也可以依照……`
      },
      latestArticles: [
        {
          id: 1,
          title: '文章名字1'
        },
        {
          id: 2,
          title: '文章名字2'
        },
        {
          id: 3,
          title: '文章名字3'
        }
      ],
      archives: [
        {
          year: 2017,
          month: 1,
          articleNum: 3
        },
        {
          year: 2017,
          month: 2,
          articleNum: 6
        },
        {
          year: 2017,
          month: 3,
          articleNum: 5
        }
      ],
      targets: [
        {
          id: 1,
          name: '前端'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: '爬虫'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin-top: 20px;
}
.list{
  padding: 0 20px;
}
</style>
