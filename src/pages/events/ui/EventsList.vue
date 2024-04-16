<script setup>
import { EventCard } from '@/entities/event-card';

defineProps(['events']);
</script>

<template>
	<div class="events-list container">
		<EventCard
			v-for="(event, index) in events"
			:key="index"
			:url="event.url"
			:img="event.img"
			:time="event.timme"
			:badgeTitle="event.badgeTitle"
			:title="event.title"
		/>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.events-list {
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 80px;
	column-gap: 30px;
	@media (max-width: $tab) {
		margin-top: 30px;
		row-gap: 50px;
		column-gap: 20px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: $mob) {
		grid-template-columns: 1fr;
	}
}
</style>
