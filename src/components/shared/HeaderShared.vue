<script setup lang="ts">
const navigationLinks = [
  {
    name: 'Features',
    url: '#'
  },
  {
    name: 'Pricing',
    url: '#'
  },
  {
    name: 'Resources',
    url: '#'
  }
];

const actionsLinks = [
  {
    name: 'Login',
    url: '#'
  },
  {
    name: 'Sign Up',
    url: '#'
  }
];
</script>

<template>
  <header class="w-full h-20">
    <nav class="max-w-screen-xl h-full flex justify-between items-center px-4 py-8">
      <div class="flex gap-4 items-center">
        <img src="../../assets/logo.svg" alt="Shortly logo">
        <ul class="flex gap-4">
          <li v-for="({ name, url }, index) in navigationLinks" :key="index">
            <a :href="url">{{ name }}</a>
          </li>
        </ul>
      </div>
      <ul class="flex">
        <li v-for="({ name, url }, index) in actionsLinks" :key="index">
          <a :href="url">{{ name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>