export default {
  presets: [],
  rules: [
    //TODO:unocss-自定义样式类名
    ["black", { background: "black" }],
    ["red", { color: "red" }],
    //()=>({}) 自调用,返回{}, 传入第一个参数为待匹配的字符串,后面的参数皆为按顺序匹配到的组
    [/^bg-((#|rgb).*)/, ([, color]) => ({ background: color })], //TODO:unocss-正则动态样式
    ["bg-center", { "background-position": "center", "background-repeat": "no-repeat", "background-size": "cover" }],
    ["flex-center", { display: "flex", "justify-content": "center", "align-items": "center" }],
    [/^m(\d+)/, ([, num]) => ({ margin: `${num}px` })],
    [/^p(\d+)/, ([, num]) => ({ padding: `${num}px` })],
    [/pos-(a|r)-(l|r)(.*?)-(t|b)(.*)/, ([, position, x, x_num, y, y_num]) => ({ position: position == "a" ? "absolute" : "relative", [x == "l" ? "left" : "right"]: x_num, [y == "t" ? "top" : "bottom"]: y_num })],
    [/pos-(a|r)-(t|b)(.*?)-(l|r)(.*)/, ([, position, y, y_num, x, x_num]) => ({ position: position == "a" ? "absolute" : "relative", [x == "l" ? "left" : "right"]: x_num, [y == "t" ? "top" : "bottom"]: y_num })],
  ],
  // 组合rules中的样式
  shortcuts: {
    c: ["bg-center", "flex-center"],
  },
};
