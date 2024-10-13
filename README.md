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