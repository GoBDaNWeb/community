<script setup>
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { PATH_PAGE, routes } from '@/shared/config';
import { HebrewIcon, LogoIcon, StarIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/icons';
</script>

<template>
	<header class="header">
		<div class="header-inner container">
			<RouterLink :to="PATH_PAGE.home" class="logo">
				<LogoIcon />
			</RouterLink>
			<div class="center">
				<div class="info">
					<div class="info-inner">
						<div class="info-item">
							<StarIcon />
							<p>ГЛАВА ТОРЫ<span> МИШПАТИМ</span></p>
							<p>СКОРО <span>ПУРИМ КАТАН</span></p>
						</div>
						<div class="info-item">
							<StarIcon />
							<p>ЗАЖИГАНИЕ <span>09 ФЕВРАЛЯ 17:02</span></p>
							<p>ИСХОД <span>10 ФЕВРАЛЯ 18:19</span></p>
						</div>
						<div class="info-item">
							<StarIcon />
							<p>ОСТАЛСЯ <span>1 ДЕНЬ</span></p>
							<p>ДО <span>ТУ-БИ ШВАТ</span></p>
						</div>
					</div>
					<div class="hebrew">
						<HebrewIcon />
					</div>
				</div>
				<div class="navigation">
					<nav>
						<RouterLink :to="route.url" v-for="route in routes" :key="route.url">
							{{ route.title }}
						</RouterLink>
					</nav>
					<div class="contacts">
						<a href="tel:+7 (495) 786-13-78">+7 (495) 786-13-78</a>
						<div class="socials">
							<a class="tg" href="#" target="_blank"><TelegramIcon /></a>
							<a class="wp" href="#" target="_blank"><WhatsappIcon /></a>
							<a class="vk" href="#" target="_blank"><VkIcon /></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss">
.header {
	.header-inner {
		.navigation {
			.contacts {
				.socials {
					a {
						svg {
							path {
								transition: var(--trs-300);
							}
						}
					}
					.tg {
						&:hover {
							svg {
								path {
									fill: var(--sky-color);
								}
							}
						}
					}
					.wp {
						&:hover {
							svg {
								path {
									fill: var(--green-color);
								}
							}
						}
					}
					.vk {
						&:hover {
							svg {
								path {
									fill: var(--blue-color);
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.header {
	border-bottom: 1px solid var(--border-color);
	height: 100px;
	overflow: hidden;
	position: sticky;
	top: 0;
	z-index: 100;
	background: var(--white-color);
	.header-inner {
		display: flex;
		align-items: center;
		height: 100%;
		.logo {
			padding-right: 30px;
			height: 100%;
			display: flex;
			align-items: center;

			border-right: 1px solid var(--border-color);
		}
		.center {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			.info {
				padding-left: 30px;
				display: flex;
				align-items: center;
				height: 100%;
				position: relative;
				justify-content: space-between;

				&:after {
					content: '';
					position: absolute;
					width: 4000px;
					height: 1px;
					background: var(--border-color);
					bottom: 0;
					left: 0;
				}
				.info-inner {
					display: flex;
					align-items: center;
					gap: 55px;
					.info-item {
						display: flex;
						align-items: center;
						gap: 15px;
						p {
							color: var(--gray-color);
							font-weight: 500;
							text-transform: uppercase;
							font-size: 11px;
							line-height: 13px;
							letter-spacing: -1px;

							span {
								color: var(--red-color);
							}
							&:last-child {
								span {
									color: var(--gold-color);
								}
							}
						}
					}
				}
				.hebrew {
					height: 100%;
					display: flex;
					align-items: center;
					padding-left: 30px;
					border-left: 1px solid var(--border-color);
				}
			}
			.navigation {
				padding-left: 30px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 100%;
				nav {
					display: flex;
					align-items: center;
					gap: 50px;
					a.router-link-active {
						color: var(--red-color);
					}
					a {
						font-weight: 500;
						text-transform: uppercase;
						color: var(--gray-color);
						line-height: 19px;
						font-size: 16px;
						letter-spacing: -1px;
						transition: var(--trs-300);
						&:hover {
							color: var(--red-color);
						}
					}
				}
				.contacts {
					display: flex;
					align-items: center;
					gap: 30px;
					a {
						font-weight: 500;
						font-size: 16px;
						line-height: 19px;
						letter-spacing: -1px;
						color: var(--gray-color);
					}
					.socials {
						display: flex;
						align-items: center;
						gap: 20px;
					}
				}
			}
		}
	}
}
</style>
