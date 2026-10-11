// @ts-check
/**
 * Verdant 主题的完整配置示例，列出了全部可配置项。
 *
 * 用法：复制到站点的 `_mintfolio/theme.config.mjs`，再按需修改。
 * - 没写的字段使用主题默认值；下面的开关和数值都是默认值，列表里的条目是示例。
 * - 改完重启 `mintfolio dev`；`mintfolio theme check` 会指出写错的字段名或取值。
 * - 站点名称、个人资料、社交链接、项目、分页等内容设置在 `site.config.ts` 中，不在这里。
 */
export default {
  // 使用的主题包。
  theme: '@mintfolio/theme-verdant',

  // 主题外观设置，只对上面这个主题有效。
  settings: {
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

      // 推荐工具列表。默认 []，空列表不显示工具条目。下面是示例。
      tools: [
        {
          name: 'Astro', // 名称。
          description: '以内容为中心的网站框架', // 一句话简介。
          url: 'https://astro.build', // 地址。
        },
        {
          name: 'Figma', // 名称。
          description: '在线界面设计工具', // 一句话简介。
          url: 'https://www.figma.com', // 地址。
        },
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
        // 文章列表。默认 []。下面是示例。
        items: [
          {
            postId: 'hello', // 文章 ID，对应 content/blog/hello.md。
            image: '/images/hello.webp', // 配图地址，文件放在 public/images/ 中；留空显示占位图。
          },
          {
            postId: 'another-post', // 文章 ID。
            image: '', // 配图地址；留空显示占位图。
          },
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
  },

  // 可选：用自己的 Astro 文件替换主题的某个页面，路径相对 `_mintfolio/`。
  // 可替换的页面：home / post / archive / page / notFound。写法见 Core 文档的 Theme API。
  // overrides: {
  //   pages: {
  //     archive: './overrides/archive.astro',
  //   },
  // },
};
