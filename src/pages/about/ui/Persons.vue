<script setup>
import { PersonCard } from '@/entities/person-card';

import { persons } from '../config';
</script>

<template>
	<div class="persons container">
		<h3>Люди общины</h3>
		<div class="persons-list">
			<PersonCard
				v-for="(person, index) in persons"
				:key="index"
				:img="person.img"
				:name="person.name"
				:post="person.post"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.persons {
	margin-top: 100px;
	margin-bottom: 100px;
	h3 {
		color: var(--gray-color);
		font-weight: 500;
		font-size: 48px;
		line-height: 48px;
		letter-spacing: -1px;
	}
	.persons-list {
		margin-top: 50px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 80px;
		column-gap: 30px;
	}
}
</style>
