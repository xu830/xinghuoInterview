<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo" @click="goHome">
        <img src="@/assets/logo.svg" alt="inSnap Logo" />
      </div>

      <!-- Navigation Links -->
      <nav :class="{ 'nav-links': true, hidden: isMenuHidden }">
        <div class="features">
          <div>
            <router-link to="/features">{{ $t('features') }}</router-link>
          </div>
          <div>
            <router-link to="/influencers">{{ $t('influencers') }}</router-link>
          </div>
          <div>
            <router-link to="/videos">{{ $t('videos') }}</router-link>
          </div>
          <div>
            <router-link to="/insights">{{ $t('insights') }}</router-link>
          </div>
          <div>
            <router-link to="/about">{{ $t('about') }}</router-link>
          </div>
          <div>
            <router-link to="/contact">{{ $t('contact') }}</router-link>
          </div>
        </div>
      </nav>

      <!-- Language and Download Button -->
      <div class="right-side">
        <select v-model="selectedLang" @change="changeLanguage">
          <option v-for="(lang, code) in languages" :key="code" :value="code">
            {{ lang }}
          </option>
        </select>
        <router-link to="/download" class="download-button">
          {{ $t('download') }}
        </router-link>
      </div>

      <!-- Hamburger Icon for mobile -->
      <div class="hamburger-icon" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// 声明 `languages` 类型
interface Languages {
  [key: string]: string
}

export default defineComponent({
  setup() {
    const { locale } = useI18n() // 获取 i18n 实例中的 locale
    const router = useRouter()

    const isMenuHidden = ref(true)
    const selectedLang = ref<string>(localStorage.getItem('language') || 'en') // 从 localStorage 获取默认语言

    const languages: Languages = {
      en: 'English',
      zh: '简体中文',
      ar: 'العربية',
      fr: 'Français',
      es: 'Español',
      pt: 'Português',
      ko: '한국어',
      ja: '日本語',
      ru: 'Русский',
    }

    const goHome = () => {
      router.push('/')
    }

    const toggleMenu = () => {
      isMenuHidden.value = !isMenuHidden.value
    }

    const changeLanguage = () => {
      locale.value = selectedLang.value // 更新语言
      localStorage.setItem('language', selectedLang.value) // 保存用户的语言选择到 localStorage
    }

    // 监听 selectedLang 的变化
    watch(selectedLang, (newLang) => {
      locale.value = newLang
      localStorage.setItem('language', newLang) // 更新 language
    })

    return {
      isMenuHidden,
      selectedLang,
      languages,
      goHome,
      toggleMenu,
      changeLanguage,
    }
  },
})
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo img {
  width: 100px;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
  padding-left: 0;
  background-color: transparent; /* 取消背景色 */
}

.nav-links a {
  color: #807b7b; /* 深灰色 */
  text-decoration: none;
  background-color: transparent; /* 取消背景色 */
}

.nav-links a:hover {
  color: #2e2c2c; /* 深灰色 hover */
  background-color: transparent; /* 取消背景色 */
}

.nav-links.hidden {
  display: none;
}

.features {
  display: flex;
  justify-content: space-around;
}
.right-side {
  display: flex;
  align-items: center;
  gap: 20px;
}

.download-button {
  background-color: #ffd700;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: white; /* 设置字体颜色为白色 */
}

.hamburger-icon {
  display: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .hamburger-icon {
    display: block;
  }

  .nav-links {
    display: none;
  }

  .nav-links.hidden {
    display: block;
  }

  .right-side {
    gap: 10px;
  }
}
</style>
