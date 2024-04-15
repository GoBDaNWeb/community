<script setup>
import { ActivityCard } from '@/entities/activity-card';

import { TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { activityList } from '../config';
</script>

<template>
	<div class="activity">
		<div class="activity-inner container">
			<div class="activity-top">
				<Badge title="мы делаем" />
				<div class="title-wrapper">
					<h3>Деятельность общины</h3>
				</div>
			</div>
			<div class="activity-bottom">
				<ActivityCard
					v-for="(activity, index) in activityList"
					:key="index"
					:img="activity.img"
					:title="activity.title"
					:activityList="activity.activityList"
				/>
			</div>
		</div>
		<div class="contacts">
			<div class="contacts-inner container">
				<p>Подпишись на наши каналы, <span>чтобы быть в курсе</span></p>
				<div class="contacts-list">
					<a href="#" target="_blank" class="contacts-item">
						<div class="social"><TelegramIcon /></div>
						<span>Telegram</span>
					</a>
					<a href="#" target="_blank" class="contacts-item">
						<div class="social"><WhatsappIcon /></div>
						<span>Whatsapp</span>
					</a>
					<a href="#" target="_blank" class="contacts-item">
						<div class="social"><VkIcon /></div>
						<span>Вконтакте</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.activity {
	.contacts {
		.contacts-list {
			.contacts-item {
				&:nth-child(1) {
					svg {
						path {
							stroke: #5ca9dd;
							fill: #5ca9dd;
						}
					}
				}
				&:nth-child(2) {
					svg {
						path {
							stroke: #79e171;
							fill: #79e171;
						}
					}
				}
				&:nth-child(3) {
					svg {
						path {
							stroke: #3079f7;
							fill: #3079f7;
						}
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.activity {
	margin-top: 130px;

	.activity-inner {
		padding-bottom: 80px;
		.activity-top {
			display: flex;
			.title-wrapper {
				display: flex;
				justify-content: center;
				flex: 1;

				h3 {
					color: var(--gray-color);
					font-weight: 500;
					font-size: 64px;
					line-height: 64px;
					letter-spacing: -1px;
				}
			}
		}
		.activity-bottom {
			margin-top: 50px;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 30px;
		}
	}
	.contacts {
		padding-top: 30px;
		padding-bottom: 30px;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		.contacts-inner {
			display: flex;
			align-items: center;
			gap: 110px;
			p {
				color: var(--red-color);
				font-weight: 500;
				font-size: 48px;
				line-height: 48px;
				letter-spacing: -1px;
				max-width: 365px;
			}
			span {
				color: var(--gold-color);
			}
			.contacts-list {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 30px;
				width: 100%;
				.contacts-item {
					background: var(--light-gray-color);
					width: 100%;
					height: 100%;
					padding: 30px;
					height: 283px;
					position: relative;
					.social {
						width: 75px;
						height: 75px;
						background: var(--white-color);
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 999px;
						position: absolute;
						top: 30px;
						right: 30px;
					}
					span {
						color: var(--gray-color);
						font-weight: 500;
						font-size: 24px;
						line-height: 28px;
						letter-spacing: -1px;
						position: absolute;
						bottom: 30px;
						left: 30px;
					}
				}
			}
		}
	}
}
</style>
