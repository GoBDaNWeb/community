<script setup>
import { useMikvaModalStore } from '@/entities/mikva-modal-store';

import { TelegramIcon, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const modal = useMikvaModalStore();
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<div class="hero-left">
				<h1>Миква</h1>
				<h5>
					Вода в микву поступает из двух природных источников. В бор собирается вода из подземного
					источника и дождевая вода, что делает микву кошерной по всем алахическим законам. В зоне
					миквы поддерживается комфортная температура воздуха и воды.
				</h5>
				<p>
					Мужская миква не только кошерная, но и очень удобная и просторная. В ней могут
					разместиться одновременно до двадцати человек. Для подготовки к омовению посетители могут
					воспользоваться комфортными раздевалками и индивидуальными душевыми кабинами.
					<br />
					<br />
					Женская миква состоит из 5 индивидуальных подготовочных комнат, оснащенных ванной, душевой
					кабиной, туалетным столиком, большим зеркалом, возможностью внутренней (с зоной ресепшн) и
					внешней связью.
				</p>
				<div class="contacts">
					<div class="image-wrapper">
						<img src="/images/mikva/hero.jpg" alt="mikva" />
					</div>
					<div class="content">
						<div class="top">
							<a href="tel:+7 (495) 786-13-78">+7 (495) 786-13-78</a>
							<div class="socials">
								<a href="#" target="_blank"><TelegramIcon /></a>
								<a href="#" target="_blank"><WhatsappIcon /></a>
							</div>
						</div>
						<div class="center">
							<p>
								Москва, ул. Льва Толстого, 14 <br />
								<span>второй этаж</span>
							</p>
						</div>
						<div class="bottom">
							<Button @click="modal.handleOpenModal" type="submit" variable="primary"
								>Записаться</Button
							>
						</div>
					</div>
				</div>
			</div>
			<div class="hero-right">
				<div class="image-wrapper">
					<img src="/images/mikva/hero.jpg" alt="hero" />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	margin-top: 80px;
	padding-bottom: 30px;
	border-bottom: 1px solid var(--border-color);
	.hero-inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		.hero-left {
			h1 {
				color: var(--gray-color);
				font-weight: 500;
				font-size: 64px;
				line-height: 64px;
				letter-spacing: -1px;
			}
			h5 {
				color: var(--gray-color);
				font-size: 24px;
				line-height: 28px;
				margin-top: 50px;
				font-weight: 500;
				letter-spacing: -1px;
			}
			p {
				color: var(--gray-color);
				margin-top: 30px;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				letter-spacing: -1px;
			}
			.contacts {
				margin-top: 104px;
				display: flex;
				gap: 30px;
				align-items: flex-start;
				height: fit-content;
				.image-wrapper {
					min-width: 155px;
					max-width: 155px;
					height: 155px;
					background: var(--red-color);
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 999px;
					}
				}
				.content {
					display: flex;
					flex-direction: column;
					gap: 30px;
					.top {
						display: flex;
						align-items: center;
						gap: 50px;
						a {
							color: var(--gray-color);
							font-weight: 500;
							font-size: 24px;
							line-height: 28px;
							letter-spacing: -1px;
						}
						.socials {
							display: flex;
							align-items: center;
							gap: 20px;
						}
					}
					.center {
						p {
							color: var(--red-color);
							font-weight: 500;
							font-size: 24px;
							line-height: 28px;
							letter-spacing: -1px;
							margin-top: 0;
							span {
								color: var(--gold-color);
							}
						}
					}
					.bottom {
						button {
							width: 250px;
						}
					}
				}
			}
		}
		.hero-right {
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
}
</style>
