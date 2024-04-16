<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

import { gallery } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="gallery container">
		<div class="top">
			<h3>Фотогалерея</h3>
			<div class="navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="swiper">
			<Swiper
				:next="next"
				:prev="prev"
				spaceBetween="30"
				:slidesPerView="2.3"
				:breakpoints="{
					0: {
						slidesPerView: 1.2,
						spaceBetween: 20
					},
					767: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 2.3,
						spaceBetween: 30
					}
				}"
			>
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
@import '@/shared/styles/vars';

.gallery {
	margin-top: 100px;
	margin-bottom: 100px;
	@media (max-width: $tab) {
		margin-top: 80px;
		margin-bottom: 80px;
	}
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		h3 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 48px;
			line-height: 48%;
			letter-spacing: -1px;
			@media (max-width: $tab) {
				font-size: 32px;
				line-height: 35px;
			}
		}
		.navigation {
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	& > .swiper {
		margin-top: 30px;
	}
	.swiper {
		.image-wrapper {
			padding-bottom: 80%;
			position: relative;
			img {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
			}
		}
	}
}
</style>
