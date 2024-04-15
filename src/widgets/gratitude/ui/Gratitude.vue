<script setup>
defineProps(['donationList']);
</script>

<template>
	<div class="gratitude">
		<p>
			С огромной благодарностью к тем, <br />
			<span>кто уже пожертвовал на благие дела!</span>
		</p>
		<ul class="donations">
			<li v-for="(donation, index) in donationList" :key="index">
				<p>{{ donation.summ }}</p>
				<span>{{ donation.name }}</span>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.gratitude {
	background: var(--light-gray-color);
	padding: 30px;
	p {
		color: var(--red-color);
		font-weight: 500;
		font-size: 32px;
		line-height: 38px;
		letter-spacing: -1px;
		span {
			color: var(--gold-color);
		}
	}
	.donations {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		li {
			border-bottom: 1px solid rgba(230, 72, 72, 0.2);
			padding-bottom: 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			p {
				color: var(--red-color);
				font-weight: 500;
				font-size: 24px;
				line-height: 28px;
				letter-spacing: -1px;
			}
			span {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				letter-spacing: -1px;
				color: var(--gray-color);
			}
		}
	}
}
</style>
