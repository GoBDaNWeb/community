<script setup>
import { RouterLink } from 'vue-router';

import { Button } from '@/shared/ui';
import { formatNumber } from '@/shared/utils';

const props = defineProps(['img', 'title', 'totalCost', 'currentCost', 'url']);

const collectingPerc = (+props.currentCost / +props.totalCost) * 100;
</script>

<template>
	<RouterLink :to="url" class="donation-card">
		<div class="image-wrapper">
			<img :src="img" alt="donation" />
		</div>
		<h5>{{ title }}</h5>
		<div class="content">
			<div class="collecting">
				<span>{{ formatNumber(totalCost) }} ₽</span>
				<div class="current-collecting">
					<div :style="`width: ${collectingPerc}%`" class="line"></div>
					<p>{{ formatNumber(currentCost) }} ₽</p>
				</div>
				<Button variable="primary">Пожертвовать</Button>
			</div>
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.donation-card {
	height: 100%;
	display: flex;
	flex-direction: column;
	&:hover {
		.image-wrapper {
			img {
				transform: scale(1.2);
			}
		}
		h5 {
			color: var(--red-color);
		}
		button {
			background: var(--red-color);
		}
	}
	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			transition: var(--trs-300);
		}
	}
	h5 {
		color: var(--gray-color);
		font-weight: 500;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: -1px;
		flex: 1;
		display: block;
		margin-top: 30px;
		transition: var(--trs-300);
		@media (max-width: $tab) {
			font-size: 18px;
			line-height: 21px;
		}
	}
	.content {
		display: flex;
		flex-direction: column;

		.collecting {
			margin-top: 30px;

			& > span {
				color: var(--red-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				letter-spacing: -1px;
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 28px;
				}
			}
			.current-collecting {
				margin-top: 10px;
				background: var(--light-gray-color);
				border-radius: 999px;
				position: relative;
				height: 20px;
				margin-bottom: 20px;

				.line {
					position: absolute;
					border-radius: 999px;
					background: var(--red-color);
					height: 20px;
					left: 0;
				}
				p {
					color: var(--white-color);
					font-weight: 500;
					font-size: 14px;
					line-height: 16px;
					letter-spacing: -1px;
					z-index: 2;
					position: relative;
					padding-left: 6px;
					padding-top: 2px;
				}
			}
			button {
				width: 250px;
			}
		}
	}
}
</style>
