<script setup>
import { StarIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';
</script>

<template>
	<main>
		<div class="become-member container">
			<div class="left">
				<h1>Стать мембером</h1>
				<span>Преимущества для мемберов общины</span>
				<ul>
					<li>
						<StarIcon />
						<p>Скидки на все мероприятия</p>
					</li>
					<li>
						<StarIcon />
						<p>Скидки на посещение миквы</p>
					</li>
					<li>
						<StarIcon />
						<p>Доступ к библиотеке общины</p>
					</li>
					<li>
						<StarIcon />
						<p>Общинная молитва за здоровье (мишеберах)</p>
					</li>
					<li>
						<StarIcon />
						<p>Возможность приглашать гостей</p>
					</li>
					<li>
						<StarIcon />
						<p>Доступ к онлайн записям уроков</p>
					</li>
					<li>
						<StarIcon />
						<p>Консультации раввина</p>
					</li>
					<li>
						<StarIcon />
						<p>Гифтбокс</p>
					</li>
					<li>
						<StarIcon />
						<p>Возможность участвовать в финансовом отчете (раз в пол года)</p>
					</li>
					<li>
						<StarIcon />
						<p>Ключи от общины</p>
					</li>
					<li>
						<StarIcon />
						<p>Приоритетный доступ к анонсам событий и мероприятий (календарь на месяц)</p>
					</li>
					<li>
						<StarIcon />
						<p>Доступ в коворкинг во время работы общины</p>
					</li>
					<li>
						<StarIcon />
						<p>Участие в формировании планов общины</p>
					</li>
					<li>
						<StarIcon />
						<p>Отдельные мероприятия, уроки, частные встречи</p>
					</li>
					<li>
						<StarIcon />
						<p>Приоритетная рассадка рядом с раввином на шабаты и праздники</p>
					</li>
					<li>
						<StarIcon />
						<p>Отдельная молитва при торе каждый шабат (мишеберах)</p>
					</li>
				</ul>
				<Button variable="primary">Подписаться</Button>
			</div>
			<div class="right">
				<div class="image-wrapper">
					<img src="/images/member/member.jpg" alt="member" />
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.become-member {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	margin-top: 80px;
	margin-bottom: 100px;
	@media (max-width: $tab) {
		margin-top: 20px;
		gap: 50px;
		grid-template-columns: 1fr;
	}
	.left {
		@media (max-width: $tab) {
			order: 1;
		}
		h1 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 64px;
			line-height: 64px;
			letter-spacing: -1px;
			margin-bottom: 32px;
			@media (max-width: $tab) {
				font-size: 36px;
				line-height: 39px;
			}
		}
		span {
			color: var(--red-color);
			font-weight: 500;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: -1px;
			@media (max-width: $tab) {
				font-size: 24px;
				line-height: 28px;
			}
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 10px;
			margin-top: 20px;
			@media (max-width: $tab) {
				gap: 7px;
			}
			li {
				display: flex;
				gap: 20px;
				svg {
					@media (max-width: $tab) {
						min-width: 12px;
						min-height: 15px;
					}
				}
				p {
					font-weight: 400;
					color: var(--gray-color);
					font-size: 16px;
					line-height: 22px;
					letter-spacing: -1px;
				}
			}
		}
		button {
			margin-top: 33px;
			width: 250px;
			@media (max-width: $tab) {
				width: 322px;
			}
		}
	}
	.right {
		@media (max-width: $tab) {
			order: 0;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 100%;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
