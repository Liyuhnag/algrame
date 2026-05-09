import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'algrame'
const base = process.env.GITHUB_REPOSITORY ? `/${repoName}/` : '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '阿航的学习笔记',
  description: '算法题解、Java 后端面试与知识复盘',
  cleanUrls: false,
  srcExclude: ['superpowers/**'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '算法题解', link: '/algorithms/' },
      { text: '面试题库', link: '/interview/' },
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
        text: '面试题库',
        collapsed: false,
        items: [
          { text: '题库总览', link: '/interview/' },
          { text: 'Java 基础', link: '/interview/java-basic/' },
          { text: 'Java 集合类', link: '/interview/java-collections/' },
          { text: 'JUC', link: '/interview/juc/' },
          { text: 'JVM', link: '/interview/jvm/' },
          { text: 'Spring', link: '/interview/spring/' },
          { text: 'MySQL', link: '/interview/mysql/' },
          { text: 'Redis', link: '/interview/redis/' },
          { text: '消息队列', link: '/interview/message-queue/' }
        ]
      },
      {
        text: '专题与专栏',
        collapsed: false,
        items: [
          { text: '专题索引', link: '/topics/' },
          { text: '设计模式专栏', link: '/topics/design-patterns/' },
          { text: '设计原则与思想', link: '/topics/design-patterns/principles/' },
          { text: '设计模式与范式', link: '/topics/design-patterns/patterns-and-paradigms/' },
          { text: '开源与项目实战', link: '/topics/design-patterns/open-source-and-project-practice/' },
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
