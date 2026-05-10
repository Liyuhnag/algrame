import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'algrame'
const base = process.env.GITHUB_REPOSITORY ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '阿航的沉淀网站',
  description: '算法题解、Java 后端面试与知识复盘',
  cleanUrls: false,
  srcExclude: ['superpowers/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '算法题解', link: '/algorithms/' },
      {
        text: '后端知识',
        items: [
          { text: 'Java 基础', link: '/java-basic/' },
          { text: 'Java 集合类', link: '/java-collections/' },
          { text: 'MySQL', link: '/mysql/' },
          { text: 'Redis', link: '/redis/' },
          { text: '消息队列', link: '/message-queue/' },
          { text: 'JVM', link: '/jvm/' },
          { text: 'JUC', link: '/juc/' }
        ]
      },
      { text: '设计模式', link: '/design-patterns/index.html' },
      { text: '操作系统', link: '/operating-system/index.html' },
      { text: '专题索引', link: '/topics/' }
    ],

    sidebar: [
      {
        text: '算法题解',
        collapsed: false,
        items: [
          { text: '题解总览', link: '/algorithms/' },
          { text: '每日刷题', link: '/algorithms/#每日刷题' },
          { text: '动态规划', link: '/algorithms/#动态规划' },
          { text: '二叉树', link: '/algorithms/#二叉树' },
          { text: '图论', link: '/algorithms/#图论' }
        ]
      },
      {
        text: 'Java 基础',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/java-basic/index.html' }
        ]
      },
      {
        text: 'Java 集合类',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/java-collections/index.html' }
        ]
      },
      {
        text: 'MySQL',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/mysql/index.html' }
        ]
      },
      {
        text: 'Redis',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/redis/index.html' }
        ]
      },
      {
        text: '消息队列',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/message-queue/index.html' }
        ]
      },
      {
        text: 'JVM',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/jvm/index.html' }
        ]
      },
      {
        text: 'JUC',
        collapsed: false,
        items: [
          { text: '栏目总览', link: '/juc/index.html' }
        ]
      },
      {
        text: '设计模式',
        collapsed: false,
        items: [
          { text: '专栏总览', link: '/design-patterns/index.html' },
          {
            text: '设计原则与思想',
            collapsed: false,
            items: [
              { text: '栏目总览', link: '/design-patterns/principles-and-thinking/index.html' },
              {
                text: '设计原则',
                collapsed: false,
                items: [
                  { text: '目录总览', link: '/design-patterns/principles-and-thinking/principles/index.html' },
                  { text: '单一职责原则', link: '/design-patterns/principles-and-thinking/principles/单一职责原则.md' }
                ]
              },
              { text: '规范与重构', link: '/design-patterns/principles-and-thinking/specification-and-refactoring/index.html' }
            ]
          },
          {
            text: '模式与范式',
            collapsed: false,
            items: [
              { text: '栏目总览', link: '/design-patterns/patterns-and-paradigms/index.html' },
              { text: '创建型模式', link: '/design-patterns/patterns-and-paradigms/creational/index.html' },
              { text: '结构型模式', link: '/design-patterns/patterns-and-paradigms/structural/index.html' },
              { text: '行为型模式', link: '/design-patterns/patterns-and-paradigms/behavioral/index.html' }
            ]
          },
          {
            text: '开源与项目实战',
            collapsed: false,
            items: [
              { text: '栏目总览', link: '/design-patterns/open-source-and-project-practice/index.html' },
              { text: '开源实战', link: '/design-patterns/open-source-and-project-practice/open-source-practice/index.html' },
              { text: '项目实战', link: '/design-patterns/open-source-and-project-practice/project-practice/index.html' }
            ]
          }
        ]
      },
      {
        text: '操作系统',
        collapsed: false,
        items: [
          { text: '专栏总览', link: '/operating-system/index.html' },
          { text: '绪论', link: '/operating-system/introduction/index.html' },
          { text: '虚拟化', link: '/operating-system/virtualization/index.html' },
          { text: '并发', link: '/operating-system/concurrency/index.html' }
        ]
      },
      {
        text: '专题索引',
        collapsed: false,
        items: [
          { text: '专题索引', link: '/topics/' },
          { text: '项目追问', link: '/topics/#项目追问' },
          { text: '场景设计', link: '/topics/#场景设计' }
        ]
      }
    ],

    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
