<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { DonationCard } from '@/entities/donation-card';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { donations } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="tsdaka">
		<div class="tsdaka-top container">
			<Badge title="благотворительность" />
			<div class="title-wrapper">
				<h3>ЦДАКА</h3>
			</div>
			<div class="navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="tsdaka-center container">
			<Swiper :next="next" :prev="prev" spaceBetween="30" :slidesPerView="3">
				<SwiperSlide v-for="(donation, index) in donations" :key="index">
					<DonationCard
						:url="donation.url"
						:img="donation.img"
						:title="donation.title"
						:totalCost="donation.totalCost"
						:currentCost="donation.currentCost"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="tsdaka-bottom">
			<div class="tsdaka-bottom-inner container">
				<RouterLink :to="PATH_PAGE.tsdaka">Смотреть все <ArrowRightIcon /></RouterLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.tsdaka {
	.tsdaka-bottom {
		a {
			svg {
				path {
					stroke: var(--red-color);
				}
			}
			&:hover {
				svg {
					path {
						stroke: var(--gold-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.tsdaka {
	.tsdaka-top {
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
	.tsdaka-center {
		margin-top: 50px;
		.swiper-slide {
			height: auto;
		}
	}
	.tsdaka-bottom {
		margin-top: 100px;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		.tsdaka-bottom-inner {
			padding-top: 30px;
			padding-bottom: 30px;
			display: flex;
			justify-content: center;
			a {
				display: flex;
				align-items: center;
				gap: 20px;
				color: var(--red-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				transition: var(--trs-300);
				&:hover {
					color: var(--gold-color);
				}
			}
		}
	}
}
</style>
