import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './lang/'

let lang = localStorage.getItem('lang')
let locale = ''

if (!lang) {
  locale = 'en'
  localStorage.setItem('lang', 'en')
} else if (lang !== 'zhCN' && lang !== 'en') {
  locale = 'en'
} else {
  locale = lang
}

Vue.use(VueI18n)
const i18n = new VueI18n({
  // 当前语言环境
  locale,
  // 默认语言环境。如果locale中无匹配项则采用该项值
  fallbackLocale: 'en',
  messages
})

export default i18n
