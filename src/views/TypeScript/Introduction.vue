<template>
  <div class="TypeScript">
    <a  target="_blank" href="https://ts.xcatliu.com/">学习网站</a>
    <el-divider></el-divider>

    <!--介绍-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">js和ts的区别</el-tag>
      <el-input  type="textarea" :rows="20" placeholder="请输入内容" resize="none" v-model="TypeScript_text.data"></el-input>
    </el-row>
    <el-divider></el-divider>
    <!--总结-->
    <el-row class="rowStyle">
      <el-tag style="margin-bottom: 20px">什么是TypeScript</el-tag>
      <el-input  type="textarea" :rows="20" placeholder="请输入内容" resize="none" v-model="TypeScript_text.text"></el-input>
    </el-row>
    <el-divider></el-divider>
  </div>
</template>

<script>
  export default {
    name: "Introduction",
    data(){
      return {
        TypeScript_text:{
          data:
            '一、JavaScript：\n' +
            '1.它没有类型约束。\n' +
            '2.由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。\n' +
            '3.基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。\n' +
            '4.函数是 JavaScript 中的一等公民[2]，可以赋值给变量，也可以当作参数或返回值。\n' +
            '\n' +
            '二、TypeScript：\n' +
            'JavaScript的语法糖，完善JavaScript不足和缺陷。\n' +
            '\n' +
            '三、动静态类型\n' +
            'JavaScript 动态类型，运行时才会进行类型检查\n' +
            'TypeScript 静态类型，编译阶段就会进行类型检查\n' +
            '\n' +
            '四、强弱类型区分\n' +
            '1、TypeScript完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以它们都是弱类型。\n' +
            '2、强类型：Python等\n' +
            '3、举例    弱： 1+‘1’ = ‘2’  强： 1+‘1’ = 会报错不能\'int\' and \'str\'相加，需str(1) + \'1\'\n' +
            '\n',
          text:
            '\n' +
            '1.TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。\n' +
            '\n' +
            '2.TypeScript 是一门静态类型、弱类型的语言。\n' +
            '\n' +
            '3.TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。\n' +
            '\n' +
            '4.TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。\n' +
            '\n' +
            '5.TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。\n' +
            '\n' +
            '6.TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。\n' +
            '\n' +
            '7.TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。\n' +
            '\n' +
            '8.TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。\n' +
            '\n' +
            '9.TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。'
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .TypeScript{
    padding 20px
  }
</style>


