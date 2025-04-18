<template>
    <section class="main-section">
      <!-- 左侧内容 -->
      <div class="left-side">
        <span class="big-text">{{ $t('bigText') }}</span>
        <p class="small-text">{{ $t('smallText') }}</p>
        <div class="download-buttons">
          <button class="google-play" @click="goToGooglePlay">{{ $t('googlePlayBtn') }}</button>
          <button class="app-store" @click="goToAppStore">{{ $t('appStoreBtn') }}</button>
        </div>
      </div>
  
      <!-- 右侧图片 -->
      <div class="right-side">
        <div class="image-container">
          <img src="@/assets/logo.svg" alt="Influencer Image" class="image" />
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    methods: {
      goToGooglePlay() {
        window.open('https://play.google.com', '_blank'); // 伪函数，跳转到Google Play
      },
      goToAppStore() {
        window.open('https://www.apple.com/app-store/', '_blank'); // 伪函数，跳转到App Store
      }
    }
  };
  </script>
  
  <style scoped>
  .main-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: transparent;
  }
  
  .left-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 30px;
  }
  
  .big-text {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .small-text {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .download-buttons {
    display: flex;
    gap: 20px;
  }
  
  .download-buttons button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .google-play {
    background-color: #34a853;
    color: white;
  }
  
  .app-store {
    background-color: #0070c9;
    color: white;
  }
  
  .right-side {
    /* flex: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-container {
    position: relative;
  }
  
  .image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }
  
  .image:hover {
    transform: translateY(-5px); /* 图片向上滑动5px */
  }
  </style>
  