<script setup>
import { computed } from 'vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})

// 分组展示逻辑
const sections = [
  { id: 1, title: 'Intelligent Computational Imaging & Computer Vision' },
  { id: 2, title: 'Big Data & High Performance Computing' },
  { id: 3, title: 'Intelligent Oil and Gas Engineering' }
]

const getArticlesByType = (type) => {
  return props.articles.filter(article => article.type === type)
}
</script>

<template>
  <div>
    <h2 class="section-title pb-2 mt-4 border-bottom">Selected Publications</h2>
    
    <div v-for="section in sections" :key="section.id" class="mb-5">
      <h4 class="mb-4 mt-3 text-secondary fw-bold">{{ section.id }}. {{ section.title }}</h4>
      
      <div class="row gy-4">
        <div v-for="(article, index) in getArticlesByType(section.id)" :key="index" class="col-12">
          <div class="card h-100 overflow-hidden shadow-sm article-card">
            <div class="row g-0 h-100">
              <div class="col-md-9 p-4 d-flex flex-column">
                <div class="mb-2">
                  <span class="badge bg-primary-subtle text-primary-emphasis rounded-pill">{{ article.journal }}</span>
                </div>
                <h5 class="card-title fw-bold mb-2">{{ article.title }}</h5>
                <div class="mb-2 text-muted small"><i class="bi bi-calendar-event me-1"></i> {{ article.date }}</div>
                <p class="card-text text-secondary mb-auto small">{{ article.authors }}</p>
                <a :href="article.link" target="_blank" class="icon-link gap-1 icon-link-hover stretched-link mt-3 text-decoration-none">
                  View Article
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-3 d-none d-md-block position-relative bg-light border-start">
                  <img :src="article.image" class="article-img" alt="Article Thumbnail" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0,0,0,0.05);
}
.article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.article-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
