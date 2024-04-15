<script setup>
import { Badge } from '@/shared/ui';
</script>

<template>
	<div class="donations">
		<div class="donation-inner container">
			<div class="left">
				<Badge title="благотворительность" />
				<h3>
					Пожертвовать <br />
					<span>в фонд общины</span>
				</h3>
				<p>
					Вы в одном шаге от великой мицвы и партнерства <br /><br />с общиной «Среди своих» в
					совершении добрых дел. Пусть Б-г пошлет благословение во всех ваших добрых помыслах!
				</p>
			</div>
			<div class="right">
				<div class="widget"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.donations {
	margin-top: 130px;
	padding: 30px;

	border-bottom: 1px solid var(--border-color);
	.donation-inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 72px;
		.left {
			h3 {
				margin-top: 70px;
				color: var(--red-color);
				font-weight: 500;
				font-size: 64px;
				line-height: 64px;
				letter-spacing: -1px;
				span {
					color: var(--gold-color);
				}
			}
			p {
				margin-top: 50px;
				color: var(--gray-color);
				font-weight: 500;
				font-size: 24px;
				line-height: 28px;
				letter-spacing: -1px;
			}
		}
		.right {
			.widget {
				width: 100%;
				height: 675px;
				background: var(--light-gray-color);
			}
		}
	}
}
</style>
