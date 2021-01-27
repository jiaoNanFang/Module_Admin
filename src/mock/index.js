


import Mock from 'mockjs'


const data={
  code:'000000',
  list: [
    {
      id: 10,
      name: "Vue组件传参",
      parentId: 0,
      url: "",
      perms: "",
      type: 0,
      icon: "el-icon-menu",
      orderNum: 20,
      delFlag: 0,
      parentName: null,
      level: 0,
      children: [
        {
          id: 11,
          name: "父传子",
          parentId: 10,
          url:"/dataPass/FatherToSon",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 0,
          delFlag: 0,
          parentName: "组件传参",
          level: 1,
          children: []
        },
        {
          id: 12,
          name: "子传父",
          parentId: 10,
          url: "/dataPass/SonToFather",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 10,
          delFlag: 0,
          parentName: "组件传参",
          level: 2,
          children: []
        },
        {
          id: 13,
          name: "插槽",
          parentId: 10,
          url: "/dataPass/SlotPage",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 10,
          delFlag: 0,
          parentName: "组件传参",
          level: 3,
          children: []
        },
      ]
    },
    {
      id: 20,
      name: "JS基础",
      parentId: 0,
      url: "",
      perms: "",
      type: 0,
      icon: "el-icon-menu",
      orderNum: 20,
      delFlag: 0,
      parentName: null,
      level: 0,
      children:[
        {
          id: 21,
          name: "执行上下文/作用域",
          parentId: 10,
          url:"/jsModule/zuoYongYu",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 0,
          delFlag: 0,
          parentName: "执行上下文/作用域",
          level: 1,
          children: []
        }
      ]
    },
    {
      id: 30,
      name: "TypeScript",
      parentId: 0,
      url: "",
      perms: "",
      type: 0,
      icon: "el-icon-menu",
      orderNum: 20,
      delFlag: 0,
      parentName: null,
      level: 0,
      children: [
        {
          id: 31,
          name: "认识TypeScript",
          parentId: 30,
          url:"/TypeScript/Introduction",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 0,
          delFlag: 0,
          parentName: "组件传参",
          level: 1,
          children: []
        },
        {
          id: 32,
          name: "TypeScript特性",
          parentId: 30,
          url:"/TypeScript/Features",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 0,
          delFlag: 0,
          parentName: "组件传参",
          level: 1,
          children: []
        },
      ]
    },
    {
      id: 999,
      name: "代码试验区",
      parentId: 0,
      url: "",
      perms: "",
      type: 0,
      icon: "el-icon-menu",
      orderNum: 20,
      delFlag: 0,
      parentName: null,
      level: 0,
      children: [
        {
          id: 9991,
          name: "试验",
          parentId: 999,
          url:"/Demo/Demo1",
          perms: "",
          type: 1,
          icon: "el-icon-bell",
          orderNum: 0,
          delFlag: 0,
          parentName: "代码试验区",
          level: 1,
          children: []
        },
      ]
    },
  ],
};

Mock.mock('/api/test', 'post', data)

export default Mock;
