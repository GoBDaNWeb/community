<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { PersonCard } from '@/entities/person-card';

import { ArrowLeftIcon, ArrowRightIcon, LogoSmallIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { aboutSwiper } from '../config';

const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="about">
		<div class="about-top container">
			<Badge title="среди своих" />
			<div class="text-wrapper">
				<h3>Еврейская община <br />в Хамовниках</h3>
			</div>
		</div>
		<div class="about-center container">
			<div class="left">
				<h5>Общину «СРЕДИ СВОИХ» создали московские предприниматели и раввин в 2008 году.</h5>
				<div class="info">
					<div class="info-item">
						<h6>Кто мы</h6>
						<p>
							Сообщество современных евреев, самодостаточных, самореализовавшихся, интересующихся
							еврейской традицией.
						</p>
					</div>
					<div class="info-item">
						<h6>Ценности</h6>
						<p>
							Максимальная самореализация в рамках кошерности и человеческих возможностей, данных
							Б-гом. Мы чтим тысячелетние традиции народа и придерживаемся современного формата
							жизни.
						</p>
					</div>
				</div>
			</div>
			<div class="center">
				<PersonCard img="/images/home/about.jpg" name="Шмуэль Каменецкий" post="раввин" />
			</div>
			<div class="right">
				<LogoSmallIcon />
				<p>
					Любой еврей может присоединиться к общине.
					<span>
						Истинная духовность проявляется в наших поступках и отношении к окружающему миру, а не в
						количестве произнесенных молитв.
					</span>
				</p>
			</div>
		</div>
		<div class="about-bottom">
			<div class="navigation container">
				<button ref="prev"><ArrowLeftIcon /></button>
				<button ref="next"><ArrowRightIcon /></button>
			</div>
			<div class="swiper container">
				<Swiper
					:next="next"
					:prev="prev"
					spaceBetween="30"
					:slidesPerView="1.4"
					:breakpoints="{
						0: {
							slidesPerView: 1.2,
							spaceBetween: 20
						},
						1024: {
							slidesPerView: 1.4,
							spaceBetween: 30
						}
					}"
				>
					<SwiperSlide v-for="(about, index) in aboutSwiper" :key="index">
						<div class="image-wrapper">
							<img :src="about" alt="about" />
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.about {
	margin-top: 133px;
	@media (max-width: $tab) {
		margin-top: 100px;
	}
	.about-top {
		display: flex;
		align-items: flex-start;
		@media (max-width: $tab) {
			flex-direction: column;
			gap: 20px;
		}
		.text-wrapper {
			flex: 1;
			display: flex;
			justify-content: center;
			h3 {
				font-weight: 500;
				font-size: 64px;
				line-height: 64px;
				letter-spacing: -1px;
				color: var(--gray-color);
				@media (max-width: $tab) {
					font-size: 36px;
					line-height: 39px;
				}
			}
		}
	}
	.about-center {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-top: 50px;
		gap: 50px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
		}
		.left {
			h5 {
				color: var(--gray-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				letter-spacing: -1px;
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 28px;
				}
			}
			.info {
				margin-top: 50px;
				display: flex;
				flex-direction: column;
				gap: 50px;
				@media (max-width: $tab) {
					margin-top: 30px;
					gap: 30px;
				}
				.info-item {
					display: flex;
					flex-direction: column;
					gap: 25px;
					@media (max-width: $tab) {
						gap: 15px;
					}
					h6 {
						color: var(--gray-color);
						font-weight: 500;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -1px;
						@media (max-width: $tab) {
							font-size: 18px;
							line-height: 21px;
						}
					}
					p {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 16px;
						line-height: 22px;
						letter-spacing: -1px;
					}
				}
			}
		}
		.right {
			p {
				margin-top: 50px;
				color: var(--red-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				letter-spacing: -1px;
				@media (max-width: $tab) {
					margin-top: 30px;
					font-size: 24px;
					line-height: 28px;
				}
				span {
					color: var(--gold-color);
					margin-top: 10px;
					display: block;
				}
			}
		}
	}
	.about-bottom {
		margin-top: 30px;
		padding-bottom: 30px;
		border-bottom: 1px solid var(--border-color);
		@media (max-width: $tab) {
			margin-top: 50px;
			padding-bottom: 20px;
		}
		.navigation {
			margin-bottom: 30px;
			display: flex;
			justify-content: flex-end;
			@media (max-width: $tab) {
				display: none;
			}
		}
		.swiper {
			.image-wrapper {
				position: relative;
				padding-bottom: 55%;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
