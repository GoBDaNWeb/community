<script setup>
import { RouterLink } from 'vue-router';

import { Badge } from '@/shared/ui';

defineProps(['img', 'time', 'badgeTitle', 'title', 'url']);
</script>

<template>
	<RouterLink :to="url" class="event-card">
		<div class="image-wrapper">
			<img :src="img" alt="title" />
		</div>
		<div class="content">
			<div class="info">
				<Badge :title="badgeTitle" />
				<span>{{ time }}</span>
			</div>
			<h5>{{ title }}</h5>
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.event-card {
	&:hover {
		.image-wrapper {
			img {
				transform: scale(1.2);
			}
		}
		.content {
			h5 {
				color: var(--red-color);
			}
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
	.content {
		margin-top: 32px;
		@media (max-width: $tab) {
			margin-top: 20px;
		}
		.info {
			display: flex;
			align-items: center;
			gap: 10px;
			& > span {
				color: var(--gold-color);
				font-weight: 500;
				font-size: 14px;
				line-height: 16px;
				letter-spacing: -1px;
				@media (max-width: $tab) {
					font-size: 12px;
					line-height: 14px;
				}
			}
		}
		h5 {
			transition: var(--trs-300);
			margin-top: 20px;
			color: var(--gray-color);
			font-weight: 500;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: -1px;
			@media (max-width: $tab) {
				margin-top: 15px;
				font-size: 24px;
				line-height: 28px;
			}
		}
	}
}
</style>
