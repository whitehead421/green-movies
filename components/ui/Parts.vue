<template>
  <aside class="flex flex-col gap-4">
    <ul v-for="(segment, index) in data" :key="index">
      <li class="text-sm font-semibold leading-none">{{ segment.label }}</li>
      <li class="text-gray-400">{{ segment.subLabel }}</li>
      <ul>
        <li v-for="(part, index) in segment.parts" :key="index">
          <NuxtLink :to="part.link" class="text-xs hover:underline">{{
            part.label
          }}</NuxtLink>
        </li>
      </ul>
    </ul>
  </aside>
</template>

<script setup lang="ts">
interface IPart {
  label: string;
  link: string;
}

interface ISegment {
  label: string;
  subLabel?: string;
  parts: IPart[];
}

interface IProps {
  data: ISegment[];
}

defineProps<IProps>();
</script>

<style scoped></style>
