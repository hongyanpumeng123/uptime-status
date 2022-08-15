// 配置
window.Config = {

  // 显示标题
  SiteName: '红颜初依的监测站',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur1791845-c17a8b12681d42882802f7f6',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页1',
      url: 'https://tjys.tk'
    },
    {
      text: '博客',
      url: 'https://blog.qikaile.tk'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/qikaile/uptime-status'
    },
    {
      text: '此网站教程',
      url: 'https://qikaile.tk/uptime-status.html'
    },
  ],
};
