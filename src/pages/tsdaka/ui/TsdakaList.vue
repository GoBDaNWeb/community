<script setup>
import { Gratitude } from '@/widgets/gratitude';

import { DonationCard } from '@/entities/donation-card';

import { donations, gratitude } from '../config';
</script>

<template>
	<div class="tsdaka-list container">
		<div class="top">
			<h3>ЦДАКА</h3>
		</div>
		<div class="content">
			<div class="list">
				<DonationCard
					v-for="(donation, index) in donations"
					:key="index"
					:url="donation.url"
					:img="donation.img"
					:title="donation.title"
					:totalCost="donation.totalCost"
					:currentCost="donation.currentCost"
				/>
			</div>
			<div class="gratitude-wrapper">
				<Gratitude :donationList="gratitude" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.tsdaka-list {
	margin-top: 80px;
	@media (max-width: $tab) {
		margin-top: 50px;
	}
	.top {
		h3 {
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
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 0.5fr;
		gap: 30px;
		margin-top: 50px;
		@media (max-width: $desktop-sm) {
			grid-template-columns: 1fr 0.7fr;
			gap: 20px;
		}
		@media (max-width: $tab) {
			margin-top: 30px;
			grid-template-columns: 1fr;
		}
		.list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 30px;
			row-gap: 80px;
			@media (max-width: $desktop-sm) {
				column-gap: 20px;
				row-gap: 50px;
			}
			@media (max-width: $pre-mob) {
				grid-template-columns: 1fr;
			}
		}
		.gratitude-wrapper {
			position: relative;
			.gratitude {
				position: sticky;
				top: 150px;
			}
		}
	}
}
</style>
