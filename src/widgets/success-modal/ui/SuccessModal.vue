template
<script setup>
import { watch } from 'vue';

import { useSuccessModalStore } from '@/entities/success-modal-store';

import { CloseIcon } from '@/shared/icons';
import { Button, Input, Textarea } from '@/shared/ui';

const modal = useSuccessModalStore();

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
</script>

<template>
	<div
		@click.stop="modal.handleOpenModal"
		:class="modal.modalActive ? 'active' : ''"
		class="success-modal"
	>
		<div @click.stop class="success-modal-content">
			<div class="close-btn">
				<Button @click.stop="modal.handleOpenModal"><CloseIcon /></Button>
			</div>
			<h3>Вы успешно записаны!</h3>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.success-modal.active {
	opacity: 1;
	pointer-events: all;
	.success-modal-content {
		transform: translateX(0);
	}
}
.success-modal {
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
	.success-modal-content {
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
		@media (max-width: $tab) {
			width: 75vw;
			padding: 20px;
		}
		@media (max-width: $tab-sm) {
			width: 100vw;
		}
		.close-btn {
			position: absolute;
			top: 30px;
			right: 30px;
			@media (max-width: $tab) {
				top: 20px;
				right: 20px;
			}
		}
		h3 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 48px;
			line-height: 48px;
			letter-spacing: -1px;
			text-align: center;
			@media (max-width: $tab) {
				font-size: 32px;
				line-height: 35px;
			}
		}
	}
}
</style>
