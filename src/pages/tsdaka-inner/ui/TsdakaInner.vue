<script setup>
import { RouterLink } from 'vue-router';

import { Gratitude } from '@/widgets/gratitude';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon } from '@/shared/icons';

import { gratitude } from '../config';
</script>

<template>
	<main>
		<div class="tsdaka-inner container">
			<div class="left">
				<h1>Помощь пострадавшим экономически, больным и малоимущим</h1>
				<p>
					Община постоянно помогает столкнувшимся с экономическими трудностями, пожилым,
					тяжелобольным и малоимущим. Такие люди регулярно получают продуктовую, финансовую помощь в
					различных формах, а также шаббатние наборы.
					<br />
					<br />
					Община рассматривает каждый случай индивидуально и старается по возможности придти на
					помощь обращающимся за таковой.
					<br />
					<br />
					Спасибо всем нашим партнерам в добрых делах! Ашем помогает вам, чтобы вы могли делать
					добро!
				</p>
				<div class="widget"></div>
				<Gratitude :donationList="gratitude" />
			</div>
			<div class="right">
				<div class="tsdaka-block">
					<div class="image-wrapper">
						<img src="/images/home/event1.jpg" alt="tsdaka" />
					</div>
					<div class="btn-wrapper">
						<RouterLink :to="PATH_PAGE.tsdaka"><ArrowLeftIcon />Назад к списку</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.tsdaka-inner {
	.right {
		.btn-wrapper {
			svg {
				path {
					stroke: var(--red-color);
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
.tsdaka-inner {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	margin-top: 80px;
	margin-bottom: 100px;
	.left {
		h1 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 64px;
			line-height: 64px;
			letter-spacing: -1px;
			margin-bottom: 50px;
		}
		p {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			letter-spacing: -1px;
		}
		.widget {
			width: 100%;
			background: var(--light-gray-color);
			height: 675px;
			margin-top: 50px;
			margin-bottom: 30px;
		}
	}
	.right {
		position: relative;
		.tsdaka-block {
			position: sticky;
			top: 150px;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
			}
		}
		.btn-wrapper {
			display: flex;
			justify-content: flex-end;
			margin-top: 30px;
			a {
				color: var(--red-color);
				display: flex;
				align-items: center;
				gap: 10px;
				font-weight: 500;
				font-size: 32px;
				line-height: 38px;
				letter-spacing: -1px;
			}
		}
	}
}
</style>
