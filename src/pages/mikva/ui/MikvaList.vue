<script setup>
import { MikvaCard } from '@/entities/mikva-card';

import { mikva } from '../config';
</script>

<template>
	<div class="mikva-list">
		<div class="mikva-list-inner container">
			<MikvaCard
				v-for="(item, index) in mikva"
				:key="index"
				:img="item.img"
				:title="item.title"
				:text="item.text"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mikva-list {
	margin-top: 100px;
	padding-bottom: 100px;
	border-bottom: 1px solid var(--border-color);
	.mikva-list-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}
}
</style>
