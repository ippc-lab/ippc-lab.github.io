<script setup>
import Hero from './components/Hero.vue'
import MemberCard from './components/MemberCard.vue'
import ResearchFields from './components/ResearchFields.vue'
import PublicationList from './components/PublicationList.vue'
import Footer from './components/Footer.vue'

// 导入数据
import membersData from './data/members.json'
import articlesData from './data/articles.json'

// 处理数据中的路径问题 (将 ./images 替换为 /images)
const members = membersData.map(m => ({ ...m, image: m.image.replace('./images', '/images') }))
const articles = articlesData.map(a => ({ ...a, image: a.image.replace('./images', '/images') }))

</script>

<template>
  <div class="container py-3">
    <Hero />

    <div class="row mt-5">
      <!-- Sidebar: Members -->
      <div class="col-lg-3 mb-5">
        <div class="sticky-top" style="top: 2rem; z-index: 1;">
          <h5 class="mb-4 text-center text-uppercase text-secondary fw-bold letter-spacing-1">Our Team</h5>
          <div class="d-flex flex-column">
            <MemberCard v-for="(member, index) in members" :key="index" :member="member" />
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="col-lg-9 ps-lg-5">
        
        <!-- Introduction -->
        <div class="mb-5">
          <h2 class="section-title border-bottom pb-2">Introduction</h2>
          <div class="text-secondary lh-lg text-justify lead fs-6">
            <p>
              西南石油大学计算机与软件学院“图像处理及并行计算（IPPC）暨智能油气实验室”研究团队，自2017年正式组建以来，
              一直保持着严谨的学术态度和严肃的工作作风。该团队目前拥有11名固定教师成员，包括3名教授、3名副教授以及5名讲师，
              同时吸纳了近80名硕士研究生参与研究工作。
            </p>
            <p>
              团队的研究方向主要聚焦于智能计算成像与计算机视觉、大数据与高性能计算，以及智能油气工程等基础理论与应用研究领域。
              在科研项目的承担上，团队积极作为，不仅主持并承担了多项省部级以上的纵向项目，还与多家企事业单位建立了紧密的合作关系，
              共同开展横向项目研究。
            </p>
            <p>
              在学术成果方面，团队取得了显著的成就。截至目前，已在国内外权威期刊上发表论文200余篇，其中SCI论文数量达到80多篇，
              充分展示了团队在学术研究领域的深厚实力和严谨态度。
              西南石油大学计算机与软件学院“图像处理及并行计算（IPPC）暨智能油气实验室”研究团队，将继续秉持严谨的学术精神，
              致力于推动相关领域的研究进展与技术创新。
            </p>
          </div>
        </div>

        <!-- Research Fields -->
        <ResearchFields />

        <!-- Publications -->
        <PublicationList :articles="articles" />
        
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<style scoped>
.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>
