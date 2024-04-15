<script setup>
import TsdakaList from './TsdakaList.vue';

import { Donation } from '@/widgets/donation';
</script>

<template>
	<main class="tsdaka-page">
		<TsdakaList />
		<Donation />
	</main>
</template>

<style lang="scss" scoped>
.tsdaka-page {
	.donations {
		border-top: 1px solid var(--border-color);
		border-bottom: none;
	}
}
</style>
