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



## biome watch

https://biomejs.dev/guides/getting-started/#installation



## next profile
next build --profile


运行 npm run build -- --profile，将 --profile 添加到 -- 分隔符后，会将 --profile 作为参数传递给实际执行的命令，最终的命令还是 next build --profile

