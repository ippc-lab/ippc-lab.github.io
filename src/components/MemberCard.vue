<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a :href="member.link || '#'" class="list-group-item list-group-item-action d-flex gap-3 p-3 member-card border rounded-3 mb-3 shadow-sm" :class="{ 'disabled': !member.link }" :aria-disabled="!member.link">
    <img :src="member.image" :alt="member.name" class="rounded-circle flex-shrink-0 object-fit-cover" width="56" height="56">
    <div class="d-flex gap-2 w-100 justify-content-between align-items-center">
      <div>
        <h6 class="mb-0 fw-bold">{{ member.name }}</h6>
        <p class="mb-0 opacity-75 small">{{ member.title }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.member-card {
  transition: all 0.2s ease-in-out;
  background-color: white;
}
.member-card:hover:not(.disabled) {
  background-color: #f8f9fa;
  transform: translateX(5px);
  border-color: var(--bs-primary) !important;
}
.object-fit-cover {
  object-fit: cover;
}
</style>
