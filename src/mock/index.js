


import Mock from 'mockjs'


const data={
  code:'000000',
  list: [
    {
      id: 10,
      name: "组件传参",
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
  ],
};

Mock.mock('/api/test', 'post', data)

export default Mock;
