module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // 用于sass全局变量
  // chainWebpack: config => {
  //   ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
  //     config.module.rule('scss').oneOf(match).use('sass-loader')
  //       .tap(opt => Object.assign(opt, {
  //         data: `@import '~@/assets/sass/main.scss';`
  //       }))
  //   })
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import "~@/assets/sass/main.scss"`,
  //     },
  //   },
  // },
}