<script setup>
import { Map } from '@/entities/map';

import { RouteIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';
</script>

<template>
	<div class="contacts container">
		<div class="contacts-left">
			<Badge title="контактная информация" />
			<div class="info">
				<div class="info-left">
					<h6>Шалом и добро пожаловать! Приходите, чтобы почувствовать себя своими среди своих!</h6>
					<div class="contacts-info">
						<p class="tel"><a href="tel:+7 985 786 13 78">+7 985 786 13 78</a> — секретарь</p>
						<p class="tel"><a href="tel:+7 985 786 13 78">+7 985 786 13 78</a> — раввин</p>
						<a class="mail" href="mailto:shalom@sredisvoih.com">shalom@sredisvoih.com</a>
						<p class="address">Москва, ул. Льва Толстого, 14, второй этаж</p>
					</div>
					<div class="route">
						<p>Москва, ул. Льва Толстого, 14, второй этаж</p>
						<a href="#" target="_blank"><RouteIcon />построить маршрут</a>
					</div>
				</div>
				<div class="info-right">
					<h6>Расписание работы</h6>
					<ul class="schedule">
						<li>
							<p>Пн, Чт</p>
							<span>08:30 - 22:00</span>
						</li>
						<li>
							<p>Вт, Ср, Пт, Сб</p>
							<span>10:00 - 22:00</span>
						</li>
						<li>
							<p>Вс</p>
							<span>11:00 - 17:00</span>
						</li>
					</ul>
					<p>
						Для индивидуальной молитвы,<br />вы можете прийти в любое удобное время.
						<br />
						<br />
						Если для этого Вам нужна консультация раввина, свяжитесь с нами.
					</p>
				</div>
			</div>
			<div class="tour">
				<div class="image-wrapper">
					<img src="/images/tour.jpg" alt="tour" />
				</div>
				<div class="text">
					<p>
						Виртуальный <br />
						<span>тур</span>
					</p>
				</div>
			</div>
		</div>
		<div class="contacts-right">
			<Map id="map" :coords="[55.73282856900716, 37.58877250000002]" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.contacts {
	margin-top: 132px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding-bottom: 30px;
	@media (max-width: $desktop-sm) {
		grid-template-columns: 1fr;
	}
	@media (max-width: $tab) {
		padding-bottom: 20px;
		margin-top: 100px;
	}
	.contacts-left {
		.info {
			margin-top: 35px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 30px;
			@media (max-width: $tab) {
				margin-top: 50px;
				gap: 50px;
			}
			@media (max-width: $tab-sm) {
				grid-template-columns: 1fr;
			}
			.info-left {
				h6 {
					color: var(--gray-color);
					font-weight: 500;
					font-size: 24px;
					line-height: 28px;
					@media (max-width: $tab) {
						font-size: 18px;
						line-height: 21px;
					}
				}
				.contacts-info {
					display: flex;
					flex-direction: column;
					gap: 20px;
					margin-top: 35px;
					@media (max-width: $tab) {
						margin-top: 25px;
						gap: 15px;
					}
					.address,
					.tel {
						color: var(--gray-color);
						font-weight: 400;
						font-size: 16px;
						line-height: 20px;
						letter-spacing: -1px;
					}
					.mail {
						color: var(--red-color);
						font-size: 16px;
						line-height: 20px;
						letter-spacing: -1px;
						font-weight: 400;
					}
				}
				.route {
					margin-top: 35px;
					padding-top: 35px;
					border-top: 1px solid var(--border-color);
					@media (max-width: $tab) {
						margin-top: 25px;
						padding-top: 25px;
					}
					p {
						color: var(--gray-color);
						font-weight: 500;
						font-size: 20px;
						line-height: 26px;
						@media (max-width: $tab) {
							font-size: 18px;
							line-height: 21px;
						}
					}
					a {
						margin-top: 20px;
						display: flex;
						align-items: center;
						gap: 10px;
						color: var(--red-color);
						font-weight: 500;
						font-size: 13px;
						line-height: 15px;
					}
				}
			}
			.info-right {
				h6 {
					font-weight: 500;
					font-size: 24px;
					line-height: 28px;
					letter-spacing: -1px;
					color: var(--gray-color);
					@media (max-width: $tab) {
						font-size: 18px;
						line-height: 21px;
					}
				}
				.schedule {
					display: flex;
					flex-direction: column;
					margin-top: 35px;
					@media (max-width: $tab) {
						margin-top: 25px;
					}
					li {
						padding-top: 15px;
						padding-bottom: 15px;
						border-top: 1px solid var(--border-color);
						display: flex;
						align-items: center;
						justify-content: space-between;
						@media (max-width: $tab) {
							padding-top: 10px;
							padding-bottom: 10px;
						}
						p {
							color: var(--gray-color);
							font-weight: 500;
							font-size: 16px;
							line-height: 19px;
							letter-spacing: -1px;
						}
						span {
							color: var(--red-color);
							font-weight: 500;
							font-size: 16px;
							line-height: 20px;
							letter-spacing: -1px;
						}
						&:last-child {
							border-bottom: 1px solid var(--border-color);
						}
					}
				}
				& > p {
					margin-top: 35px;
					color: var(--gray-color);
					font-weight: 400;
					font-size: 16px;
					line-height: 20px;
					letter-spacing: -1px;
					@media (max-width: $tab) {
						margin-top: 25px;
					}
				}
			}
		}
		.tour {
			margin-top: 71px;
			display: flex;
			gap: 30px;
			align-items: stretch;
			height: fit-content;
			@media (max-width: $tab) {
				margin-top: 50px;
				gap: 20px;
			}
			.image-wrapper {
				min-width: 155px;
				max-width: 155px;
				height: 155px;
				background: var(--gold-color);
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
				align-items: flex-start;
				padding-top: 30px;
				width: 100%;
				border-top: 1px solid var(--border-color);
				@media (max-width: $tab) {
					padding-top: 20px;
				}
				p {
					font-weight: 500;
					font-size: 32px;
					line-height: 38px;
					letter-spacing: -1px;
					color: var(--red-color);
					@media (max-width: $tab) {
						font-size: 24px;
						line-height: 28px;
					}
					span {
						color: var(--gold-color);
					}
				}
			}
		}
	}
	.contacts-right {
		@media (max-width: $desktop-sm) {
			position: relative;
			padding-bottom: 55%;
			& > div {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
