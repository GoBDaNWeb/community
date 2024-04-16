<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { EventCard } from '@/entities/event-card';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { events } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="events">
		<div class="events-top container">
			<Badge title="события общины" />
			<h3>Мероприятия</h3>
			<div class="navigation">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
		</div>
		<div class="events-center container">
			<Swiper
				:next="next"
				:prev="prev"
				spaceBetween="30"
				:slidesPerView="3"
				:breakpoints="{
					0: {
						slidesPerView: 1.2,
						spaceBetween: 20
					},
					500: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					767: {
						slidesPerView: 2.2,
						spaceBetween: 20
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30
					}
				}"
			>
				<SwiperSlide v-for="(event, index) in events" :key="index">
					<EventCard
						:url="event.url"
						:img="event.img"
						:title="event.title"
						:badgeTitle="event.badgeTitle"
						:time="event.time"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="events-bottom">
			<div class="events-bottom-inner container">
				<RouterLink :to="PATH_PAGE.events">Смотреть все <ArrowRightIcon /></RouterLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.events {
	.events-bottom {
		a {
			svg {
				path {
					stroke: var(--red-color);
					transition: var(--trs-300);
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
@import '@/shared/styles/vars';

.events {
	.events-top {
		display: flex;
		justify-content: space-between;
		margin-top: 130px;
		@media (max-width: $tab) {
			margin-top: 100px;
			flex-direction: column;
			gap: 20px;
		}
		h3 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 64px;
			line-height: 64px;
			letter-spacing: -1px;
			@media (max-width: $tab) {
				font-size: 36px;
				line-height: 39px;
			}
		}
		.navigation {
			display: flex;
			align-items: center;
			gap: 20px;
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	.events-center {
		margin-top: 50px;
		@media (max-width: $tab) {
			margin-top: 30px;
		}
	}
	.events-bottom {
		margin-top: 100px;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		@media (max-width: $tab) {
			margin-top: 40px;
		}
		.events-bottom-inner {
			padding-top: 30px;
			padding-bottom: 30px;
			display: flex;
			justify-content: center;
			@media (max-width: $tab) {
				padding-top: 12px;
				padding-bottom: 12px;
			}
			a {
				display: flex;
				align-items: center;
				gap: 20px;
				color: var(--red-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				transition: var(--trs-300);
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 28px;
				}
				svg {
					@media (max-width: $tab) {
						width: 32px;
						height: 25px;
					}
				}
				&:hover {
					color: var(--gold-color);
				}
			}
		}
	}
}
</style>
