<script setup>
</script>

<template>
  <div class="text-center py-5 mb-4 hero-section">
    <img src="/images/logo.png" alt="Organization Logo" class="img-fluid mb-4 logo-anim" style="max-height: 100px;">
    <h1 class="display-5 fw-bold text-body-emphasis mb-3">IPPC Lab</h1>
    <h2 class="h4 text-secondary mb-4">Image Processing and Parallel Computing & Intelligent Oil and Gas Laboratory</h2>
    <div class="d-flex justify-content-center">
      <span class="badge bg-dark rounded-pill px-3 py-2">图像处理及并行计算研究中心 暨 智能油气实验室</span>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: radial-gradient(circle at center, rgba(13, 59, 102, 0.03) 0%, rgba(255, 255, 255, 0) 70%);
}
.logo-anim {
  animation: fadeInDown 1s ease-out;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
