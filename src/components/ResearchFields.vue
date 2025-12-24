<script setup>
const directions = [
  { 
    title: 'Intelligent Computational Imaging & Computer Vision', 
    image: '/images/direction1.png',
    desc: 'Focusing on advanced algorithms for image reconstruction and visual understanding.'
  },
  { 
    title: 'Big Data & High Performance Computing', 
    image: '/images/direction2.png',
    desc: 'Leveraging parallel computing power to process massive datasets in oil & gas industries.'
  },
  { 
    title: 'Intelligent Oil and Gas Engineering', 
    image: '/images/direction3.png',
    desc: 'Applying AI technologies to solve complex engineering problems in the energy sector.'
  }
]
</script>

<template>
  <div>
    <h2 class="section-title pb-2 border-bottom">Fields of Research</h2>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
      <div class="col" v-for="(item, index) in directions" :key="index">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg border-0" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 bg-dark-overlay">
            <h4 class="pt-5 mt-5 mb-4 lh-1 fw-bold">{{ item.title }}</h4>
            <p class="mt-auto d-none d-lg-block text-white-50 small">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.text-shadow-1 {
  text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .5);
}

.bg-dark-overlay {
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
    height: 100%;
}
</style>
