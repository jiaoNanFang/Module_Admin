


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
      icon: "el-icon-office-building",
      orderNum: 20,
      delFlag: 0,
      parentName: null,
      level: 0,
      children: [
        {
          id: 11,
          name: "父传子",
          parentId: 10,
          url:"/dataPass/index",
          perms: "",
          type: 1,
          icon: "el-icon-office-building",
          orderNum: 0,
          delFlag: 0,
          parentName: "医院管理",
          level: 1,
          children: []
        },
        {
          id: 12,
          name: "组件传参2",
          parentId: 10,
          url: "/tags/hostpitalTags",
          perms: "",
          type: 1,
          icon: "el-icon-office-building",
          orderNum: 10,
          delFlag: 0,
          parentName: "医院管理",
          level: 1,
          children: []
        }
      ]
    },
  ],
};

Mock.mock('/api/test', 'post', data)

export default Mock;
