const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Colsrch'Blog"; // 个人网站名字

const BLOG_URL = "https://colsrch.top"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/Colsrch"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://cdn.jsdelivr.net/gh/Colsrch/pixiv@master/48.jpg"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "开源项目" },
  { sortId: 2, title: "个人项目（瞎捣鼓" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "hexo-offline-popup",
    subtitle: "一个增强Hexo站点的插件",
    url: "https://github.com/Colsrch/hexo-offline-popup",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 2,
    title: "AutoLinklastactivetime",
    subtitle: "自动获取您的友链的最近活跃时间",
    url: "https://github.com/Colsrch/AutoLinklastactivetime",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 2,
    title: "baidu-url-submit-by-using-sitemap",
    subtitle: "🚀 自动提取 sitemap 中的链接，并利用百度 API 进行推送，提升网站收录速度。",
    url: "https://github.com/Colsrch/baidu-url-submit-by-using-sitemap",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 1,
    title: "___-help-me-download",
    subtitle: "XX帮我下载好吗【伸手党",
    url: "https://github.com/ChenYFan-Tester/____-help-me-download",
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
