/**
 * Verdant 完整设置模板：启用主题时由 Core 写入 _mintfolio/theme.config.mjs 的 settings。
 * 数组示例保持注释，初始值保留主题默认行为。站点资料写在 site.config.ts。
 */
export default {
  // 初始明暗模式。可选：'auto' 跟随系统 / 'light' 浅色 / 'dark' 深色。默认 'auto'。
  // 访客在主题面板里保存过的偏好优先于这里。
  initialMode: 'auto',

  // 初始配色，字符串编号 '1'–'8'。默认 '1'。访客在主题面板里保存过的偏好优先于这里。
  // '1' 青柠薄荷  '2' 橘子汽水  '3' 晴空海盐  '4' 葡萄跳跳糖
  // '5' 莓果奶昔  '6' 向日葵    '7' 海岛假日  '8' 午夜游乐场
  initialPalette: '1',

  // 首页首次显示的文章数量，范围 1–100。默认 6。其余文章通过“加载更多”显示。
  homePageSize: 6,

  // 旧版归档条数，范围 1–100。默认 8。仅为兼容旧配置保留，已不控制分页；
  // 归档分页请设置 site.config.ts 的 blog.pageSize。
  archivePageSize: 8,

  // 侧边栏：区域开关、推荐工具和引言。
  sidebar: {
    // 侧栏各区域的显示开关，默认都为 true。
    sections: {
      contact: true, // 联系方式，数据来自 site.config.ts 的 social 等资料。
      activity: true, // 最近动态。
      tools: true, // 推荐工具，即下面的 tools 列表。
    },

    // 推荐工具列表。默认 []，空列表不显示工具条目。下面为已注释的示例，取消注释后生效。
    tools: [
      // {
        // name: 'Astro', // 名称。
        // description: '以内容为中心的网站框架', // 一句话简介。
        // url: 'https://astro.build', // 地址。
      // },
      // {
        // name: 'Figma', // 名称。
        // description: '在线界面设计工具', // 一句话简介。
        // url: 'https://www.figma.com', // 地址。
      // },
    ],

    // 侧栏引言。
    quote: {
      enabled: false, // 是否显示引言。默认 false。
      text: '', // 引言内容。默认 ''。
      author: '', // 引言作者。默认 ''。
    },
  },

  // 首页设置。
  home: {
    // 首页推荐文章：展示列表中前三篇能找到的文章。
    hotContent: {
      enabled: false, // 是否显示推荐文章。默认 false。
      // 文章列表。默认 []。下面为已注释的示例，取消注释后生效。
      items: [
        // {
          // postId: 'hello', // 文章 ID，对应站点根目录 hello.md。
          // image: '/images/hello.webp', // 配图地址，文件放在 public/images/ 中；留空显示占位图。
        // },
        // {
          // postId: 'another-post', // 文章 ID。
          // image: '', // 配图地址；留空显示占位图。
        // },
      ],
    },
  },

  // 文章页设置。
  article: {
    // 普通文章末尾的插图。
    footerImage: {
      enabled: false, // 是否显示文末插图。默认 false。
      src: '', // 图片地址，例如 '/images/article-footer.webp'；留空时使用站点头像。默认 ''。
    },
  },
};
