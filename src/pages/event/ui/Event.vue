<script setup>
import { RouterLink } from 'vue-router';

import { Gratitude } from '@/widgets/gratitude';

import { useEventModalStore } from '@/entities/event-modal-store';

import { PATH_PAGE } from '@/shared/config';
import { ArrowLeftIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const modal = useEventModalStore();
</script>

<template>
	<main>
		<div class="event container">
			<div class="left">
				<h1>Иврит для начинающих</h1>
				<h5>
					Спешите зарегистрироваться на Яхад TRIP 2023-2024 <br />ул. Льва Толстого, 14, второй этаж
				</h5>
				<p>
					4 сентября в 20:00 начинаем новый курс занятий и мероприятий.
					<br /><br />
					Раз в неделю мы встречаемся в ЕКЦ Центр Роста и общаемся, слушаем интересные лекции,
					вкусно и кошерно пьем чай.
					<br />
					<br />
					В завершение нынешнего курса весной 2024 мы нашей дружной Мишпухой (семьей, компанией)
					едем в ЮАР!
					<br /><br />
					Община постоянно помогает столкнувшимся с экономическими трудностями, пожилым,
					тяжелобольным и малоимущим. Такие люди регулярно получают продуктовую, финансовую помощь в
					различных формах, а также шаббатние наборы. <br /><br />
					Община рассматривает каждый случай индивидуально и старается по возможности придти на
					помощь обращающимся за таковой. <br /><br />
					Спасибо всем нашим партнерам в добрых делах! Ашем помогает вам, чтобы вы могли делать
					добро!
				</p>
				<h5>7 причин поехать с нам</h5>
				<ul>
					<li>1. Познакомиться с новыми людьми и получить новую информацию!</li>
					<li>2. Увидеть одно из 7 новых чудес природы.</li>
					<li>3. Искупаться с пингвинами в атлантическом океане.</li>
					<li>4. Открыть для себя мир диких животных на африканском сафари.</li>
					<li>5. Посетить синагоги и музеи африканской общины.</li>
					<li>6. Посетить кошерные винодельни.</li>
					<li>7. Сделать селфи на знаменитом Мысе Доброй Надежды.</li>
				</ul>
				<Button @click="modal.handleOpenModal" variable="primary">Записаться</Button>
			</div>
			<div class="right">
				<div class="event-block">
					<div class="image-wrapper">
						<img src="/images/home/event1.jpg" alt="tsdaka" />
					</div>
					<div class="btn-wrapper">
						<RouterLink :to="PATH_PAGE.events"><ArrowLeftIcon />Назад к списку</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.event {
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
.event {
	margin-bottom: 100px;
	margin-top: 80px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	.left {
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
			letter-spacing: -1px;
			font-weight: 500;
			margin-top: 50px;
		}
		p {
			color: var(--gray-color);
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			letter-spacing: -1px;
			margin-top: 50px;
		}
		ul {
			margin-top: 20px;
			li {
				color: var(--gray-color);

				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				letter-spacing: -1px;
			}
		}
		button {
			margin-top: 50px;
			width: 250px;
		}
	}
	.right {
		position: relative;
		.event-block {
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
