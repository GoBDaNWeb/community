<script setup>
import { RouterLink } from 'vue-router';

import { PATH_PAGE } from '@/shared/config';
import { LogoIcon, ParadigmaIcon, TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/icons';
</script>

<template>
	<footer class="footer">
		<div class="footer-inner container">
			<div class="logo">
				<RouterLink :to="PATH_PAGE.home"><LogoIcon /></RouterLink>
				<div class="policy">© 2008-2024. <br />Еврейская община <br />в Хамовниках.</div>
			</div>
			<div class="socials">
				<a class="tg" href="#" target="_blank">
					<TelegramIcon />
					<p>telegram</p>
				</a>
				<a class="wp" href="#" target="_blank">
					<WhatsappIcon />
					<p>whatsapp</p>
				</a>
				<a class="vk" href="#" target="_blank">
					<VkIcon />
					<p>вконтакте</p>
				</a>
			</div>
			<div class="paradigma">
				<a href="https://paradigma-digital.ru/" target="_blank">
					<ParadigmaIcon />
					<p>Разработка сайта – Paradigma</p>
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	.footer-inner {
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
		.paradigma {
			a {
				&:hover {
					svg {
						path {
							fill: var(--red-color);
						}
					}
				}
				svg {
					path {
						transition: var(--trs-300);
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.footer {
	padding-top: 20px;
	padding-bottom: 20px;
	border-top: 1px solid var(--border-color);
	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 100px;
		.logo {
			display: flex;
			align-items: center;
			gap: 41px;
			.policy {
				font-weight: 500;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray-color);
				letter-spacing: -1px;
			}
		}
		.socials {
			flex: 1;
			display: flex;
			align-items: center;
			gap: 30px;
			justify-content: flex-end;
			a {
				display: flex;
				align-items: center;
				gap: 10px;
				p {
					color: var(--gray-color);
					font-weight: 500;
					font-size: 13px;
					line-height: 15px;
					text-transform: uppercase;
				}
			}
		}
		.paradigma {
			a {
				display: flex;
				align-items: center;
				gap: 10px;
				svg {
					path {
					}
				}
				p {
					color: var(--gray-color);
					font-weight: 500;
					font-size: 13px;
					line-height: 15px;
					text-transform: uppercase;
					transition: var(--trs-300);
				}
				&:hover {
					p {
						color: var(--red-color);
					}
				}
			}
		}
	}
}
</style>
