import { createI18n } from 'vue-i18n';

// 引入每个语言的 JSON 文件
import en from './locale/en.json';
import zh from './locale/zh.json';
// todo: 添加其他语言的 JSON 文件
// import ar from './ar.json';
// import fr from './fr.json';
// import es from './es.json';
// import pt from './pt.json';
// import ko from './ko.json';
// import ja from './ja.json';
// import ru from './ru.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',  // 默认语言为英语
  fallbackLocale: 'en',  // 如果找不到对应的翻译则回退到英语
  messages: {
    en,
    zh,
    // ar,
    // fr,
    // es,
    // pt,
    // ko,
    // ja,
    // ru
  }
});

export default i18n;
