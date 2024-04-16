<script setup>
import { Contacts } from '@/widgets/contacts';
</script>

<template>
	<main class="contacts-page">
		<h1 class="container">Контакты</h1>
		<Contacts />
	</main>
</template>

<style lang="scss">
.contacts-page {
	.contacts {
		margin-top: 0;
		.badge {
			display: none;
		}
		.info {
			margin-top: 0 !important;
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.contacts-page {
	margin-top: 80px;
	@media (max-width: $tab) {
		margin-top: 50px;
	}
	h1 {
		margin-bottom: 50px;
		color: var(--gray-color);
		font-weight: 500;
		font-size: 64px;
		line-height: 64px;
		letter-spacing: -1px;
		@media (max-width: $tab) {
			font-size: 36px;
			line-height: 39px;
			margin-bottom: 30px;
		}
	}
}
</style>
