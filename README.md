mkdir rc15
cd rc15
pnpm init 

pnpm add next@rc react@rc react-dom@rc
pnpm add babel-plugin-react-compiler

## code next.config.js
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
};
 
module.exports = nextConfig;

## 
三星49带鱼屏平替 HKC GS49UK 49英寸5K 240HZ QD-OLED 带鱼屏显示器体验测试
不支持超宽屏的游戏的可以试试Flawless Widescreen，部分游戏很完美

## biome watch

https://biomejs.dev/guides/getting-started/#installation



## next profile
next build --profile


运行 npm run build -- --profile，将 --profile 添加到 -- 分隔符后，会将 --profile 作为参数传递给实际执行的命令，最终的命令还是 next build --profile

## react 19
react 19 去掉了 为了防止不必要的渲染 很难正确使用
useCallback
useMemo
memo

重新计算
重新调用函数
性能hook都去掉

去掉forwardRef html组建 button


use（） promises
useContent

