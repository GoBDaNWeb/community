<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

defineProps(['prev', 'next', 'spaceBetween', 'slidesPerView']);

const modules = ref([Navigation]);
</script>

<template>
	<Swiper
		:spaceBetween="spaceBetween"
		:slidesPerView="slidesPerView"
		:navigation="{
			prevEl: prev,
			nextEl: next
		}"
		:modules="modules"
		class="swiper"
	>
		<slot></slot>
	</Swiper>
</template>
