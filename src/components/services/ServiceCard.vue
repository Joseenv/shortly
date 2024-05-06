<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <article class="relative bg-white p-8 rounded-lg flex flex-col items-center">
    <div class="bg-primary-dark-violet p-6 rounded-full absolute -top-11">
      <img :src="icon" alt="Icon">
    </div>
    <div class="mt-6 flex flex-col gap-4 items-center">
      <h3 class="text-primary-dark-violet font-bold text-xl">{{ title }}</h3>
      <p class="text-center text-base">{{ description }}</p>
    </div>
  </article>
</template>