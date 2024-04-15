<script setup>
import { StarIcon } from '@/shared/icons';

defineProps(['title']);
</script>

<template>
	<div class="badge">
		<StarIcon />
		<span>{{ title }}</span>
	</div>
</template>

<style lang="scss" scoped>
.badge {
	display: flex;
	align-items: center;
	gap: 10px;
	span {
		color: var(--red-color);
		font-size: 14px;
		line-height: 16px;
		letter-spacing: -1px;
		font-weight: 500;
		text-transform: uppercase;
		white-space: nowrap;
	}
}
</style>
