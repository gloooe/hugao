import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
//import '@mdi/font/css/materialdesignicons.css' //当使用mdi时,且 使用yarn add @mdi/font -D时 引用,等价的方法是 在index.html中引用
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        // primary: colors.purple,
        // secondary: colors.grey.darken1,
        // accent: colors.shades.black,
        // error: colors.red.accent3,
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdi' //|| 'mdiSvg' || 'md' || 'fa' || 'fa4'
    //Material Design Icons 
   // <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  // mdisvg

    //yarn add @fortawesome/fontawesome-free -D
  },
});
