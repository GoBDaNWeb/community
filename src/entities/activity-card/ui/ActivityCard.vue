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
.activity-card {
	.image-wrapper {
		position: relative;
		padding-bottom: 100%;
		margin-bottom: -70px;
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
		}
		ul {
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			gap: 15px;
			li {
				display: flex;
				gap: 37px;
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
