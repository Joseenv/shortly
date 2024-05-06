<script setup lang="ts">
import brandRecognitionIcon from '../../assets/icon-brand-recognition.svg';
import detailedRecordsIcon from '../../assets/icon-detailed-records.svg';
import fullyCustomizableIcon from '../../assets/icon-fully-customizable.svg';
import ServiceCard from './ServiceCard.vue';

interface Card {
  title: string;
  description: string;
  iconLink: string;
}

const cardList: Card[] = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    iconLink: brandRecognitionIcon
  },
  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    iconLink: detailedRecordsIcon
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    iconLink: fullyCustomizableIcon
  }
];
</script>

<template>
  <section class="bg-neutral-blue px-6 py-8 mt-20 flex flex-col items-center gap-8">
    <h2 class="flex flex-col text-primary-dark-violet font-bold text-3xl">Advanced Statistics</h2>
    <p class="text-center px-2">Track how your links are performing across the web with our advanced statistics dashboard.</p>
    <div class="">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-24 mt-14">
        <ServiceCard v-for="({ title, description, iconLink }, index) in cardList" :key="index"
          :title="title"
          :description="description"
          :icon="iconLink"
        />
      </div>
    </div>
  </section>
</template>