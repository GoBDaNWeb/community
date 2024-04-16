<script setup>
import EventsList from './EventsList.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { ArrowDownIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import events from '../config/events.json';

const route = useRoute();
const currentEvents = ref(null);

currentEvents.value = events.slice(0, 9);
const loadMore = () => {
	currentEvents.value = events.slice(0, currentEvents.value.length + 3);
};
watch(route, () => {
	currentEvents.value = events.slice(0, 9);
});
</script>

<template>
	<main>
		<div class="events">
			<h1 class="events container">Мероприятия</h1>
			<EventsList :events="currentEvents" />
			<div class="load-more">
				<div class="load-more-inner container">
					<Button @click="loadMore">Загрузить еще <ArrowDownIcon /></Button>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.events {
	.load-more {
		button {
			&:hover {
				svg {
					path {
						stroke: var(--gold-color);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.events {
	margin-top: 80px;
	margin-bottom: 100px;
	@media (max-width: $tab) {
		margin-top: 50px;
		margin-bottom: 30px;
	}
	h1 {
		color: var(--gray-color);
		font-weight: 500;
		font-size: 64px;
		line-height: 64px;
		letter-spacing: -1px;
		@media (max-width: $tab) {
			font-size: 36px;
			line-height: 39px;
		}
	}
	.load-more {
		padding-top: 30px;
		border-top: 1px solid var(--border-color);
		margin-top: 80px;
		@media (max-width: $tab) {
			padding-top: 20px;
			margin-top: 50px;
		}
		.load-more-inner {
			display: flex;
			justify-content: center;
			button {
				color: var(--red-color);
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				letter-spacing: -1px;
				display: flex;
				align-items: center;
				gap: 10px;
				transition: var(--trs-300);
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 28px;
				}
				svg {
					@media (max-width: $tab) {
						width: 27px;
						height: 25px;
					}
					path {
						transition: var(--trs-300);
					}
				}
				&:hover {
					color: var(--gold-color);
				}
			}
		}
	}
}
</style>
