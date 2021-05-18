# 工具特性
Vite + Vue@3全家桶 + Sass + ESLint With Prettier + lint-staged With husky

> 各个工具的版本号见package.json

- Vite
  - [vitejs](https://cn.vitejs.dev/)

- Vue@3全家桶
  - [vue-next](https://github.com/vuejs/vue-next)
  - [vue-router-next](https://github.com/vuejs/vue-router-next)
  - [vuex@4.x](https://github.com/vuejs/vuex/tree/4.0)

- Sass(Scss)
  vite内部对sass做了处理，我们直接安装sass依赖即可使用
  ```
  npm i sass -D
  ```

- ESLint + Prettier
  - [eslint](http://eslint.cn/)
  - [prettier](https://prettier.io/)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

  对应代码：
  ```
  // .eslintrc.js
  plugins: ['vue', 'prettier'],
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号
        arrowParens: 'always', // 箭头函数始终包含圆括号
        endOfLine: 'auto', // 自动识别换行是LF还是CRLF，默认prettier是LF
        trailingComma: 'none' // 最后不需要逗号
      },
    ],
  }
  ```
  > endOfLine的官方文档的解释：[链接地址](https://prettier.io/docs/en/options.html#end-of-line)
  > trailingComma：[链接地址](https://prettier.io/docs/en/options.html#trailing-commas)

  VSCode设置里面加入保存文件时自动修复
  ```
  // 保存代码时自动修复（ESLint）
   "editor.codeActionsOnSave": {
     "source.fixAll": true
   },
  ```
  
- lint-staged + husky
  - [lint-staged](https://github.com/okonet/lint-staged)
  - [husky](https://github.com/typicode/husky/)
  
  > 注意：husky 6 + lint-staged 11的使用方式跟前面的版本不再一样，老的配置方式不再适用，建议使用lint-staged的官方命令来自动安装相关配置
  > 执行命令` npx mrm@2 lint-staged `，执行这个命令前请保证已配置了正确的ESLint。