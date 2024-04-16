<script setup>
import { Badge } from '@/shared/ui';
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<div class="hero-text">
				<h1>
					<span>
						еврейская <br />
						община
					</span>
					<br />
					в хамовниках
				</h1>
				<div class="about">
					<Badge title="о нас" />
					<p>
						Сообщество современных евреев, самодостаточных, самореализовавшихся, интересующихся
						еврейской традицией.
					</p>
				</div>
				<div class="address">
					<div class="image-wrapper">
						<img src="/images/home/address.jpg" alt="address" />
					</div>
					<div class="text">
						<p>Москва, ул. Льва Толстого, 14 <br /><span>второй этаж </span></p>
					</div>
				</div>
			</div>
			<div class="hero-image">
				<div class="image-wrapper">
					<img src="/images/home/hero.jpg" alt="hero" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	padding-bottom: 30px;
	border-bottom: 1px solid var(--border-color);
	@media (max-width: $tab) {
		padding-bottom: 20px;
	}
	.hero-inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		margin-top: 30px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			margin-top: 20px;
		}
		.hero-text {
			margin-top: 36px;
			@media (max-width: $tab) {
				order: 1;
				margin-top: 0;
			}
			h1 {
				font-weight: 600;
				font-size: 70px;
				line-height: 66px;
				color: var(--gold-color);
				text-transform: uppercase;
				white-space: nowrap;
				letter-spacing: -1px;
				@media (max-width: $tab) {
					font-size: 40px;
					line-height: 40px;
				}
				span {
					color: var(--red-color);
				}
			}
			.about {
				margin-top: 32px;
				display: flex;
				gap: 120px;
				align-items: flex-start;
				@media (max-width: $tab) {
					flex-direction: column;
					gap: 20px;
				}
				p {
					color: var(--gray-color);
					font-weight: 500;
					line-height: 28px;
					letter-spacing: -1px;
					font-size: 24px;
					@media (max-width: $tab) {
						font-size: 18px;
						line-height: 21px;
					}
				}
			}
			.address {
				margin-top: 71px;
				display: flex;
				gap: 30px;
				align-items: stretch;
				height: fit-content;
				@media (max-width: $tab) {
					margin-top: 40px;
				}
				.image-wrapper {
					min-width: 155px;
					max-width: 155px;
					height: 155px;
					background: var(--red-color);
					@media (max-width: $tab) {
						min-width: 93px;
						max-width: 93px;
						height: 93px;
					}
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 999px;
					}
				}
				.text {
					display: flex;
					align-items: flex-end;
					width: 100%;
					border-top: 1px solid var(--border-color);
					p {
						font-weight: 500;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -1px;
						color: var(--red-color);
						@media (max-width: $tab) {
							font-size: 18px;
							line-height: 21px;
						}
						span {
							color: var(--gold-color);
						}
					}
				}
			}
		}
		.hero-image {
			@media (max-width: $tab) {
				order: 0;
			}
			.image-wrapper {
				padding-bottom: 86%;
				position: relative;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
}
</style>
