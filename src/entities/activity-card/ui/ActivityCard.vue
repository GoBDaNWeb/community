<script setup>
import { StarIcon } from '@/shared/icons';

defineProps(['img', 'title', 'activityList']);
</script>

<template>
	<div class="activity-card">
		<div class="image-wrapper">
			<img :src="img" alt="activity" />
		</div>
		<div class="content">
			<h5>{{ title }}</h5>
			<ul>
				<li v-for="(activity, index) in activityList" :key="index">
					<StarIcon />
					<p>{{ activity }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.activity-card {
	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
		margin-bottom: -70px;
		min-width: 340px;
		min-height: 340px;
		@media (max-width: $tab) {
			min-width: 263px;
			min-height: 263px;
			margin-bottom: 0;
		}
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
		}
	}
	.content {
		z-index: 2;
		position: relative;
		&:before {
			content: '';
			background: var(--white-color);
			height: 70px;
			width: 352px;
			position: absolute;
			top: 0;
			left: 0;
			@media (max-width: $desktop-sm) {
				width: 300px;
			}
			@media (max-width: $tab) {
				width: 227px;
				height: 25px;
				top: -25px;
			}
		}
		h5 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: -1px;
			z-index: 3;
			position: relative;
			padding-top: 37px;
			@media (max-width: $tab) {
				font-size: 24px;
				line-height: 28px;
				padding-top: 0;
			}
		}
		ul {
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			gap: 15px;
			@media (max-width: $tab) {
				gap: 7px;
			}
			li {
				display: flex;
				gap: 37px;
				@media (max-width: $tab) {
					gap: 10px;
				}
				p {
					color: var(--gray-color);
					font-weight: 400;
					font-size: 16px;
					line-height: 20px;
					letter-spacing: -1px;
				}
			}
		}
	}
}
</style>
