<template>
    <section class="features-section">
      <h2>{{ $t('featuresTitle') }}</h2>
      <div class="features-container">
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/video-icon.png" alt="Video Icon" />
          </div>
          <h3>{{ $t('feature1Title') }}</h3>
          <p>{{ $t('feature1Description') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/voice-icon.png" alt="Voice Icon" />
          </div>
          <h3>{{ $t('feature2Title') }}</h3>
          <p>{{ $t('feature2Description') }}</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <img src="@/assets/avatar-icon.png" alt="Avatar Icon" />
          </div>
          <h3>{{ $t('feature3Title') }}</h3>
          <p>{{ $t('feature3Description') }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'FeaturesSection'
  };
  </script>
  
  <style scoped>
  .features-section {
    padding: 50px;
    background-color: #f8f9fa;
    text-align: center;
  }
  
  .features-section h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .features-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .feature-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
    min-width: 280px;
  }
  
  .feature-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }
  
  .feature-card h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .feature-card p {
    font-size: 1rem;
    color: #6c757d;
  }
  </style>
  