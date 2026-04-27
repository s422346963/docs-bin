<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
const { links } = theme.value
</script>

<template>
  <div v-if="links && links.length > 0" class="m-links">
    <h1 class="m-links-title">友情链接</h1>
    <div class="m-links-list">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="m-links-item"
      >
        <img :src="link.avatar" :alt="link.name" class="m-links-avatar" />
        <div class="m-links-info">
          <h3 class="m-links-name">{{ link.name }}</h3>
          <p class="m-links-description">{{ link.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.m-links {
  margin-top: 48px;
  background-color: var(--vp-c-card);
  border-radius: 8px;
}

.m-links-title {
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.m-links-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.m-links-item {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  background-color: var(--vp-c-background);
  border-radius: 6px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.m-links-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.m-links-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
}

.m-links-info {
  flex: 1;
}

.m-links-name {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.m-links-description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .m-links-list {
    grid-template-columns: 1fr;
  }
}
</style>