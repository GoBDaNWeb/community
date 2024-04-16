<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useMobileMenuStore } from '@/entities/mobile-menu-store';

import { PATH_PAGE, routes } from '@/shared/config';
import {
	BurgerIcon,
	HebrewIcon,
	LogoIcon,
	StarIcon,
	TelegramIcon,
	VkIcon,
	WhatsappIcon
} from '@/shared/icons';
import { Button } from '@/shared/ui';

const menu = useMobileMenuStore();
const active = ref(false);

const controlNavbar = () => {
	if (typeof window !== 'undefined') {
		if (window.scrollY > 0) {
			active.value = true;
		} else {
			active.value = false;
		}
	}
};
window.addEventListener('scroll', controlNavbar);
</script>

<template>
	<header class="header" :class="active ? 'active' : ''">
		<div class="header-top-line">
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
		</div>

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
						<div class="phone-wrapper">
							<div class="herbew-icon">
								<HebrewIcon />
							</div>
							<a href="tel:+7 (495) 786-13-78">+7 (495) 786-13-78</a>
						</div>

						<div class="socials">
							<a class="tg" href="#" target="_blank"><TelegramIcon /></a>
							<a class="wp" href="#" target="_blank"><WhatsappIcon /></a>
							<a class="vk" href="#" target="_blank"><VkIcon /></a>
						</div>
						<div class="burger">
							<Button @click="menu.handleOpenMenu"><BurgerIcon /></Button>
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
@import '@/shared/styles/vars';

.header.active {
	.header-inner {
		@media (max-width: $desktop-sm) {
			margin-top: -35px;
		}
	}
}
.header {
	border-bottom: 1px solid var(--border-color);
	height: 100px;
	overflow: hidden;
	position: sticky;
	top: 0;
	z-index: 100;
	background: var(--white-color);
	@media (max-width: $desktop-sm) {
		height: fit-content;
	}
	.header-top-line {
		display: none;
		padding-top: 11px;
		padding-bottom: 11px;
		border-bottom: 1px solid var(--border-color);
		overflow: hidden;

		@media (max-width: $desktop-sm) {
			display: block;
		}
		.info {
			display: flex;
			align-items: center;
			height: 100%;
			position: relative;
			gap: 10px;
			pointer-events: none;
			flex-shrink: 0;
			scrollbar-width: thin;
			animation: scroll 35s linear infinite;
			scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
			&::-webkit-scrollbar-thumb {
				background-color: rgba(0, 0, 0, 0);
			}
			&::-webkit-scrollbar-track {
				background-color: rgba(0, 0, 0, 0);
			}
			.info-item {
				display: flex;
				align-items: center;
				gap: 10px;
				p {
					color: var(--gray-color);
					font-weight: 500;
					text-transform: uppercase;
					font-size: 10px;
					line-height: 12px;
					letter-spacing: -1px;
					white-space: nowrap;
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
	}
	.header-inner {
		display: flex;
		align-items: center;
		height: 100%;
		z-index: 2;
		position: relative;
		transition: var(--trs-300);
		background: var(--white-color);
		@media (max-width: $desktop-sm) {
			height: 50px;
		}
		.logo {
			padding-right: 30px;
			height: 100%;
			display: flex;
			align-items: center;
			border-right: 1px solid var(--border-color);
			@media (max-width: $tab) {
				padding-right: 20px;
			}
			svg {
				@media (max-width: $desktop-sm) {
					width: 81px;
					height: 35px;
				}
			}
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
				@media (max-width: $desktop-sm) {
					display: none;
				}
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
					@media (max-width: $desktop-md-2) {
						gap: 25px;
					}
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
				@media (max-width: $desktop-sm) {
					justify-content: flex-end;
				}
				nav {
					display: flex;
					align-items: center;
					gap: 50px;
					@media (max-width: $desktop-md-2) {
						gap: 25px;
					}
					@media (max-width: $desktop-sm) {
						display: none;
					}
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
					@media (max-width: $desktop-sm) {
						height: 100%;
					}
					.phone-wrapper {
						@media (max-width: $desktop-sm) {
							display: flex;
							flex-direction: column;
							align-items: flex-end;
						}
						.herbew-icon {
							display: none;
							@media (max-width: $desktop-sm) {
								display: block;
							}
							svg {
								width: 27px;
								height: 12px;
							}
						}
						a {
							font-weight: 500;
							font-size: 16px;
							line-height: 19px;
							letter-spacing: -1px;
							color: var(--gray-color);
							@media (max-width: $desktop-sm) {
								font-size: 14px;
								line-height: 16px;
							}
						}
					}

					.burger {
						border-left: 1px solid var(--border-color);
						padding-left: 20px;
						height: 100%;
						display: none;
						align-items: center;
						justify-content: center;
						@media (max-width: $desktop-sm) {
							display: flex;
						}
					}
					.socials {
						display: flex;
						align-items: center;
						gap: 20px;
						@media (max-width: $desktop-sm) {
							display: none;
						}
					}
				}
			}
		}
	}
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(calc(-100% - 20px));
	}
}
</style>
