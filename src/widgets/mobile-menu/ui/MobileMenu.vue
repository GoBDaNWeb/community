<script setup>
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useMobileMenuStore } from '@/entities/mobile-menu-store';

import { PATH_PAGE, routes } from '@/shared/config';
import {
	CloseIcon,
	HebrewIcon,
	StarIcon,
	TelegramIcon,
	VkIcon,
	WhatsappIcon
} from '@/shared/icons';
import { Button } from '@/shared/ui';

const router = useRoute();

const menu = useMobileMenuStore();

watch(router, () => {
	menu.menuActive ? menu.handleOpenMenu() : null;
});

watch(
	() => menu.menuActive,
	() => {
		if (menu.menuActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<div class="mobile-menu" :class="menu.menuActive ? 'active' : ''">
		<div class="top">
			<div class="herbew">
				<HebrewIcon />
			</div>
			<div class="close-modal">
				<Button @click="menu.handleOpenMenu"><CloseIcon /></Button>
			</div>
		</div>
		<div class="info">
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
</template>

<style lang="scss">
.mobile-menu {
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
</style>
<style lang="scss" scoped>
.mobile-menu.active {
	transform: translateX(0);
	pointer-events: all;
}
.mobile-menu {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: var(--white-color);
	z-index: 120;
	display: flex;
	flex-direction: column;
	transform: translateX(100%);
	pointer-events: none;
	transition: var(--trs-300);
	.top {
		display: flex;
		border-bottom: 1px solid var(--border-color);
		justify-content: space-between;
		.herbew {
			padding: 16px 20px;
			border-right: 1px solid var(--border-color);
		}
		.close-modal {
			padding: 16px 20px;
			border-left: 1px solid var(--border-color);
		}
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
		border-bottom: 1px solid var(--border-color);
		.info-item {
			display: flex;
			align-items: center;
			gap: 15px;
			p {
				color: var(--gray-color);
				font-weight: 500;
				text-transform: uppercase;
				font-size: 10px;
				line-height: 12px;
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
	nav {
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		flex: 1;
		justify-content: center;
		a.router-link-active {
			color: var(--red-color);
		}
		a {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 18px;
			line-height: 21px;
			letter-spacing: -1px;
			transition: var(--trs-300);
			&:hover {
				color: var(--red-color);
			}
		}
	}
	.contacts {
		border-top: 1px solid var(--border-color);
		padding: 20px 20px 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
		}
		.socials {
			display: flex;
			align-items: center;
			gap: 20px;
		}
	}
}
</style>
