<template>
  <div class="hello">
    <span>{{msg}}</span>
    <span><img src="@/assets/timg.jpg" alt=""></span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: `
       欢迎进入THE NEWS 简报首页.该项目的完成基于Vue框架。利用“品”字布局，左边的导航利用一级路由实现。该项目包含四个模块儿，分别是栏目管理，用户管理，文章管理和系统设置。其中栏目管理模块实现了增删改和批量删除四个简单的功能。其中利用axios与后台进行数据交互。其中使用了elementui和模态框。文章管理模块实现了增删改和批量删除四个简单的功能。其中利用axios与后台进行数据交互。其中模态框中运用了富文本编辑器和缩略图的处理。系统设置模块则利用二级路由实现了简单的页面跳转和刷新。
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello span{
  color: #000;
  font-size: 1em;
  line-height: 2em;
}
</style>
