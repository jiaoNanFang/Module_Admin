<template>
  <div class="TypeScript">
    <!--特性-->
    <el-row class="rowStyle" :gutter="20">
      <el-col class="col_sty" :span="10">
        <el-tag style="margin-bottom: 20px">基础类型boolean</el-tag>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>布尔值</span>
          </div>
          <div  class="text_item">在 TypeScript 中，使用 boolean 定义布尔值类型</div>
          <div  class="text_item">1、 let isDone: boolean = false</div>
          <div  class="text_item">2、 new Boolean()返回的是一个Boolean对象</div>
          <div  class="text_item">3、  Boolean(1)返回的是一个Boolean类型</div>
          <div  class="text_item">4、  boolean 是 JavaScript 中的基本类型</div>
          <div  class="text_item">5、  Boolean 是 JavaScript 中的构造函数。其他基本类型</div>
          <div  class="text_item">（除了 null 和 undefined）一样，不再赘述。</div>
        </el-card>
      </el-col>
      <el-col class="col_sty" :span="10">
        <el-tag style="margin-bottom: 20px">基础类型number</el-tag>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>数值型</span>
          </div>
          <div  class="text_item">在 TypeScript 中，使用 number 定义数值类型</div>
          <div  class="text_item">let DecLiteral: number = 6</div>
          <div  class="text_item"> ES6 中二进制和八进制表示法，它们会被编译为十进制数字</div>
          <div  class="text_item"> ～</div>
          <div  class="text_item"> ～</div>
          <div  class="text_item"> ～</div>
          <div  class="text_item"> ～</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="rowStyle" :gutter="20">
      <el-col :span="10">
        <el-tag style="margin-bottom: 20px">基础类型字符串</el-tag>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>字符串</span>
          </div>
          <div  class="text_item">在 TypeScript 中，使用 string 定义字符串类型</div>
          <div  class="text_item">1、 let myName: string = 'Tom'</div>
          <div  class="text_item"> ～</div>
          <div  class="text_item"> ～</div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-tag style="margin-bottom: 20px">基础类型空值</el-tag>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>空值</span>
          </div>
          <div  class="text_item">在 TypeScript 中，使用 void 定义空值类型</div>
          <div  class="text_item">1、 比如没有返回值的函数，即没有return</div>
          <div  class="text_item">2、 JavaScript 没有空值（Void）的概念，在 TypeScript </div>
          <div  class="text_item">中，可以用 void 表示没有任何返回值的函数： </div>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: "Features",
    data() {
      return {

      }
    }
  }
</script>
<style lang="stylus" scoped>
  .TypeScript{
    padding 20px
    .text_item{
      padding 10px
    }
    .col_sty{
      margin 0 10px
    }
    .rowStyle{
      padding 10px 0
    }
  }
</style>


