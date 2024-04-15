<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { gallery } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="gallery">
		<div class="gallery-top container">
			<Badge title="жизнь общины" />
			<h3>Фотогалерея</h3>
			<div class="navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="gallery-bottom container">
			<Swiper :next="next" :prev="prev" spaceBetween="30" :slidesPerView="2.3">
				<SwiperSlide v-for="(galleryItem, index) in gallery" :key="index">
					<div class="image-wrapper">
						<img :src="galleryItem" alt="gallery" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.gallery {
	padding-bottom: 30px;
	border-bottom: 1px solid var(--border-color);
	.gallery-top {
		display: flex;
		justify-content: space-between;
		margin-top: 130px;
		h3 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 64px;
			line-height: 64px;
			letter-spacing: -1px;
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 20px;
		}
	}
	.gallery-bottom {
		margin-top: 50px;
		.image-wrapper {
			position: relative;
			padding-bottom: 75%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
