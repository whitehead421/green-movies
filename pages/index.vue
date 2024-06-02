<template>
  <div
    v-for="slider in sliders"
    :key="slider.title"
    class="flex flex-col gap-2 w-full"
  >
    <UiBadge class="my-2" :text="slider.title" />
    <Swiper v-bind="swiperConfig" class="w-full">
      <SwiperSlide v-for="slide in data[slider.data_key]" :key="slide">
        <NuxtLink :to="`/${slider.link}/${slide.id}`" :key="slide.id">
          <UiSliderItem
            :title="slide[slider.title_key]"
            :img="buildImg(slide.poster_path)"
          />
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/home-data");

const swiperConfig = {
  modules: [SwiperScrollbar, SwiperMousewheel],
  slidesPerView: 5,
  loop: true,
  mousewheel: {
    invert: true,
  },
};

const sliders = [
  {
    title: "Top Rated Movies",
    data_key: "movies_top_rated",
    title_key: "title",
    link: "movies",
  },
  {
    title: "Upcoming Movies",
    data_key: "movies_upcoming",
    title_key: "title",
    link: "movies",
  },
  {
    title: "Top Rated TV Series",
    data_key: "tv_top_rated",
    title_key: "name",
    link: "series",
  },
  {
    title: "TV Series Airing Today",
    data_key: "tv_on_the_air",
    title_key: "name",
    link: "series",
  },
];
</script>
