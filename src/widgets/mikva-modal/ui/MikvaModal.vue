<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref, watch } from 'vue';

import { useMikvaModalStore } from '@/entities/mikva-modal-store';
import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, Input, Select, Textarea } from '@/shared/ui';

import { timeList } from '../config';

const modal = useMikvaModalStore();
const successModal = useSuccessModalStore();

const time = ref(null);
const date = ref();
const name = ref('');
const nameError = ref(false);
const phone = ref('');
const phoneError = ref(false);

const handleSetError = () => {
	name.value.length === 0 ? (nameError.value = true) : (nameError.value = false);
	phone.value.length === 0 ? (phoneError.value = true) : (phoneError.value = false);
	return;
};
const handleSuccessModal = () => {
	if (!nameError.value && !phoneError.value) {
		modal.handleOpenModal();
		successModal.handleOpenModal();
	}
};

const format = date => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}/${month}/${year}`;
};

watch(
	() => modal.modalActive,
	() => {
		if (modal.modalActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
watch([name, phone], () => {
	nameError.value = false;
	phoneError.value = false;
});
</script>

<template>
	<div
		@click.stop="modal.handleOpenModal"
		:class="modal.modalActive ? 'active' : ''"
		class="mikva-modal"
	>
		<div @click.stop class="mikva-modal-content">
			<div class="close-btn">
				<Button @click.stop="modal.handleOpenModal"><CloseIcon /></Button>
			</div>
			<h3>Записаться</h3>
			<form @submit.prevent="handleSuccessModal">
				<div class="double-input">
					<VueDatePicker
						:format="format"
						placeholder="Выбрать дату"
						v-model="date"
						auto-apply
						:time-picker="false"
					>
						<template #input-icon>
							<img class="input-slot-image" src="/images/date.svg" />
						</template>
					</VueDatePicker>
					<Select v-model="time" name="time" :options="timeList" />
				</div>
				<div class="double-input">
					<Input v-model="name" :error="nameError" type="text" placeholder="Ваше имя" />
					<Input v-model="phone" :error="phoneError" type="tel" placeholder="+7 (ХХХ) ХХХ-ХХ-ХХ" />
				</div>
				<Textarea placeholder="Комментарий (наличие еврейских корней)" />
				<p>
					Нажимая кнопку «Записаться» вы соглашаетесь с условиями <a href="#">Договора оферты</a>
				</p>
				<div class="btn-wrapper">
					<Button @click="handleSetError" type="submit" variable="primary">Записаться</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mikva-modal.active {
	opacity: 1;
	pointer-events: all;
	.mikva-modal-content {
		transform: translateX(0);
	}
}
.mikva-modal {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(217, 189, 189, 0.15);
	backdrop-filter: blur(15px);
	z-index: 110;
	transition: var(--trs-300);
	pointer-events: none;
	opacity: 0;
	.mikva-modal-content {
		background: var(--white-color);
		position: absolute;
		bottom: 0;
		top: 0;
		right: 0;
		width: 50vw;
		padding: 30px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		transform: translateX(100%);
		transition: var(--trs-300);
		.close-btn {
			position: absolute;
			top: 30px;
			right: 30px;
		}
		h3 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 48px;
			line-height: 48px;
			letter-spacing: -1px;
		}
		form {
			margin-top: 61px;
			width: 100%;
			.double-input {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 30px;
				width: 100%;
				margin-bottom: 40px;
			}
			p {
				color: var(--gray-color);
				font-weight: 400;
				font-size: 14px;
				line-height: 19px;
				text-align: center;
				margin-top: 50px;
				a {
					color: var(--red-color);
				}
			}
			.btn-wrapper {
				display: flex;
				justify-content: center;
				margin-top: 30px;
				button {
					width: 250px;
					margin: auto;
				}
			}
		}
	}
}
</style>
