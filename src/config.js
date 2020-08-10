const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "ChenYFan-测试馆"; // 个人网站名字

const BLOG_URL = "https://blog.cyfan.top"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/ChenYFan-tester"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/back/2.jpg"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "开源项目" },
  { sortId: 2, title: "Demo项目" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "i-book.in",
    subtitle: "i-book.in所有存档索引",
    url: "https://github.com/ChenYFan-Tester/i-Book.in.Archive",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 1,
    title: "AppStore",
    subtitle: "基于Vue搭建的仿AppStore项目",
    url: "https://github.com/ChenYFan-Tester/appstore",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 2,
    title: "i-book.in",
    subtitle: "Demo页面",
    url: "https://book.cyfan.top/",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 1,
    title: "___-help-me-download",
    subtitle: "XX帮我下载好吗【伸手党",
    url: "https://github.com/ChenYFan-Tester/____-help-me-download",
    icon: ""
  },
  {
    pageId: 5,
    sortId: 2,
    title: "AppStore",
    subtitle: "基于Travis-CI部署",
    url: "https://app.cyfan.top",
    icon: ""
  },
  {
    pageId: 6,
    sortId: 1,
    title: "vue_douyin",
    subtitle: "Vue 模仿抖音首页",
    url: "https://github.com/ChenYFan-Tester/vue_douyin",
    icon: ""
  },
  {
    pageId: 7,
    sortId: 1,
    title: "MagicMusic",
    subtitle: "🎵帅气的手机端音乐播放器（vue vue-router vuex flex ...）",
    url: "https://github.com/ChenYFan-Tester/MagicMusic",
    icon: ""
  },
  {
    pageId: 8,
    sortId: 1,
    title: "AutoLinklastactivetime",
    subtitle: "自动获取您的友链的最近活跃时间",
    url: "AutoLinklastactivetime",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = false; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
